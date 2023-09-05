import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "./Video.css";

const Video = () => {
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
    <section className="video">
      <div className="container d-flex justify-content-center align-items-center h-100 text-white flex-column gap-3" data-aos="zoom-in" data-aos-delay="200">
        <a
          href="https://www.youtube.com/watch?v=jAa58N4Jlos"
          className="glightbox"
          data-type="video"
          data-effect="fade"
        >
          <i className="fa-solid fa-play"></i>
        </a>
        <span>Watch Our Story</span>
      </div>
    </section>
  );
};

export default Video;
