import { useEffect, useState } from "react";
import { defaultLang, ui } from "../utils/ui";

export const Images = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/images.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="images" className="images__area">
      <div className="row images_active"></div>
    </section>
  );
};
