import { Link } from "react-router-dom";
import "./Works.css";
import WorksItem from "./WorksItem";
import image1 from "/images/works1.jpg";
import image2 from "/images/works2.jpg";
import image3 from "/images/works3.jpg";
import image5 from "/images/works5.jpg";
import image6 from "/images/works6.jpg";
import image7 from "/images/works7.jpg";
import image8 from "/images/works8.jpg";

const Works = () => {
  return (
    <section className="works">
      <h2 className="title text-center">Our Works</h2>
      <div className="row gx-0 gy-0 mt-5">
        <WorksItem img={image1} />
        <WorksItem img={image2} />
        <WorksItem img={image3} />
        <WorksItem img={image7} />
        <WorksItem img={image5} />
        <WorksItem img={image6} />
        <WorksItem img={image7} />
        <WorksItem img={image8} />
      </div>
      <div className="text-center mt-5">
        <Link to="/works" className="button">
          Load More
        </Link>
      </div>
    </section>
  );
};

export default Works;
