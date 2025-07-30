import { useEffect, useRef, useState } from "react";
import { defaultLang, getTranslation, ui } from "../utils/ui";

export const Experience = () => {
  const [lang, setLang] = useState(defaultLang);
  const experiences = ui[lang]?.["experience.items"] || [];

  const containerRef = useRef<HTMLDivElement>(null);
  const [componentHeight, setComponentHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setComponentHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight(); // cập nhật ngay khi mount
    window.addEventListener("resize", updateHeight); // cập nhật khi resize

    return () => {
      window.removeEventListener("resize", updateHeight);
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

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("languageChanged", handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("languageChanged", handleStorageChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="experience-wrapper">
      <div className="confetti">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={
              {
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                "--fall-distance": `${componentHeight}px`,
              } as React.CSSProperties & Record<string, string>
            }
          />
        ))}
      </div>

      <section id="work" className="work_experience_area pt-115 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30">
                <h5
                  data-i18n={getTranslation("experience.sub_title")}
                  className="sub_title"
                >
                  {ui[lang]["experience.sub_title"]}
                </h5>
                <h3
                  className="main_title"
                  data-i18n={getTranslation("experience.main_title")}
                >
                  {ui[lang]["experience.main_title"]}
                </h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="work_experience">
            {experiences.map(
              ({
                delay,
                order,
                title,
                company,
                date,
                number,
                description,
              }: Record<string, any>) => {
                return (
                  <div className="row mt-50">
                    <div className="col-lg-12">
                      <div
                        className="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay={delay}
                      >
                        <div
                          className={`experience_title ${
                            order === "last" ? "order-last" : "text-lg-right"
                          }`}
                        >
                          <h3 className="title">{title}</h3>
                          <p>{company}</p>
                          <span className="date">{date}</span>
                        </div>
                        <div className="experience_number">
                          <span>{number}</span>
                        </div>
                        <div
                          className={`experience_content ${
                            order !== "first" ? "order-first" : ""
                          }`}
                        >
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
