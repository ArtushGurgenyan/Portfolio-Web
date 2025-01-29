import { div } from "framer-motion/client";
import galleryImage1 from "../../img/gallery_img-01.jpg";
import galleryImage2 from "../../img/gallery_img-02.jpg";
import galleryImage3 from "../../img/gallery_img-03.jpg";
import galleryImage4 from "../../img/gallery_img-04.jpg";
import galleryImage5 from "../../img/gallery_img-05.jpg";
import galleryImage6 from "../../img/gallery_img-06.jpg";
import galleryImage7 from "../../img/gallery_img-07.jpg";
import galleryImage8 from "../../img/gallery_img-08.jpg";

import "./projects.style.css";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-info">
        <h1 className="logo-name">Portfolio</h1>
        <p>
          Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
          vehicula enim, non aliquam risus.
        </p>
      </div>
      <div className="projects-container">
        <div className="img-card">
          <img src={galleryImage1} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage2} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage3} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage4} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage5} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage6} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage7} alt="" />
        </div>
        <div className="img-card">
          <img src={galleryImage8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
