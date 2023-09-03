/* eslint-disable react/prop-types */
import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const WorksItem = (props) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      autoplayVideos: true,
    });
    return () => {
      lightbox.destroy();
    };
  }, []);
  return (
    <>
      <div className="col-lg-3 col-sm-4">
        <div className="img__wrapper">
          <img src={props.img} alt="Work Image" className="img-fluid" />
          <div className="img__hover">
            <a href={props.img} className="glightbox">
              <i className="fa-solid fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksItem;
