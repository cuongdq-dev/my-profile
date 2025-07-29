import { useEffect, useState } from "react";
import { defaultLang, getTranslation, ui } from "../utils/ui";

export const Project = () => {
  const [lang, setLang] = useState(() => defaultLang);
  const projects = ui[lang]?.["project.items"] || [];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/project.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const newLang = localStorage.getItem("lang") || defaultLang;
      setLang(newLang);
    };

    const observer = new MutationObserver(handleStorageChange);
    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // Lắng nghe sự kiện storage khi thay đổi từ tab khác
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("languageChanged", handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("languageChanged", handleStorageChange);
    };
  }, []);

  return (
    <section id="project" className="project_area pt-125">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="section_title pb-30">
              <h5
                data-i18n={getTranslation("project.sub_title")}
                className="sub_title"
              >
                {ui[lang]["project.sub_title"]}
              </h5>
              <h3
                data-i18n={getTranslation("project.main_title")}
                className="main_title"
              >
                {ui[lang]["project.main_title"]}
              </h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row project_active">
          {projects.map((project: Record<string, any>, index: number) => (
            <div key={`${index}_${project?.title}`} className="col-lg-4">
              <div className="single_project">
                <div className="project_image">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="project_content">
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "12px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {project.category}
                  </p>
                  <h4 className="project_title">
                    <a>{project.title}</a>
                  </h4>
                  <p>{project.description}</p>
                  <p className="project_label">
                    <span className="project_tag">{project?.role}</span>
                  </p>
                  <div className="project_array">
                    {project?.technology?.map((t: string, i: number) => {
                      return (
                        <p key={`${t}_${i}`} className="project_array_item">
                          {t}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
