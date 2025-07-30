import type { JSX } from "react";
import { getTranslation } from "../utils/ui";

export const ServiceCard = ({
  title,
  description,
  icon,
  iconServices,
}: {
  icon: JSX.Element;
  iconServices: JSX.Element[];
  title: string;
  description: string;
}) => {
  return (
    <div
      id={title}
      className="card-animation-1 mt-30 wow fadeInUpBig"
      data-wow-duration="1.3s"
      data-wow-delay="0.2s"
    >
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
            <span className="circle circle4"></span>
            <span className="circle circle5">{icon}</span>
          </div>
          <div className="glass"></div>
          <div className="content">
            <span className="title" data-i18n={title}></span>
            <span className="text" data-i18n={description}></span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              {iconServices?.map((icon, index) => {
                return (
                  <button
                    className={`social-button .social-button${index + 1}`}
                  >
                    {icon}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
