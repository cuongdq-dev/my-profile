import { useEffect, useState } from "react";
import { defaultLang, getTranslation, ui } from "../utils/ui";
import Tooltip from "./Tooltip";

export const Project = () => {
  const [{ lang, projects }, setLang] = useState({
    lang: defaultLang,
    projects: ui[defaultLang]?.["project.items"] || [],
  });

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
      setLang({
        lang: newLang,
        projects: ui[newLang]?.["project.items"] || [],
      });
    };

    const observer = new MutationObserver(handleStorageChange);
    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("languageChanged", handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("languageChanged", handleStorageChange);
    };
  }, []);

  return (
    <section id="project" className="project_area pt-80 ">
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
          {projects.map((project: Record<string, any>, index: number) => {
            return (
              <div key={`${index}_project_item`} className="col-lg-4">
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
                      <Tooltip
                        customStyles={{ whiteSpace: "nowrap" }}
                        tooltip={ui[lang]["project.role"]}
                      >
                        <span className="project_tag">
                          <i className="lni lni-apartment mr-1"></i>
                          {project?.role}
                        </span>
                      </Tooltip>
                      <Tooltip
                        customStyles={{ whiteSpace: "nowrap" }}
                        tooltip={ui[lang]["project.team_size"]}
                      >
                        <span className="project_team_size ml-2">
                          <i className="lni lni-users mr-1"></i>
                          {project?.teamSize || 1}
                        </span>
                      </Tooltip>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
