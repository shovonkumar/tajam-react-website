import "./Expertise.css";
import ExpertiseItem from "./ExpertiseItem";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container text-center">
        <h2 className="title">Expertise</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet proin gravida nibh vel velit
        </p>
        <div className="expertise__item__wrapper justify-content-center">
          <ExpertiseItem
            icon="fa-solid fa-tv"
            heading="Web Design &amp; Development"
          />
          <ExpertiseItem
            icon="fa-solid fa-paintbrush"
            heading="Brand Identity"
          />
          <ExpertiseItem
            icon="fa-solid fa-mobile-screen"
            heading="Mobile App"
          />
          <ExpertiseItem
            icon="fa-solid fa-bars"
            heading="Search Engine Optimization"
          />
          <ExpertiseItem
            icon="fa-solid fa-gamepad"
            heading="Game Development"
          />
          <ExpertiseItem icon="fa-regular fa-heart" heading="Made with Love" />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
