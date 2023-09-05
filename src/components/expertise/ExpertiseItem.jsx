/* eslint-disable react/prop-types */
import "./Expertise.css";

const ExpertiseItem = (props) => {
  return (
    <div className="expertise__item">
      <i className={props.icon} data-aos="fade-up" data-aos-delay="100"></i>
      <h4 data-aos="fade-up" data-aos-delay="200">{props.heading}</h4>
      <p data-aos="fade-up" data-aos-delay="300">
        This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet Aenean.
      </p>
    </div>
  );
};

export default ExpertiseItem;
