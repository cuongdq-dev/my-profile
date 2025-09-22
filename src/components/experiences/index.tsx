import { useEffect, useRef, useState } from "react";
import { defaultLang, ui } from "../../utils/ui";

export const ExperienceList = () => {
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
        {[...Array(20)].map((_, i) => {
          return (
            <div
              key={i + "_experience_animation"}
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
          );
        })}
      </div>

      <div className="work_experience">
        {experiences.map(
          (
            {
              delay,
              order,
              title,
              company,
              date,
              number,
              description,
            }: Record<string, any>,
            index: number
          ) => {
            return (
              <div key={`${title}_${index}`} className="row mt-50">
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
  );
};
