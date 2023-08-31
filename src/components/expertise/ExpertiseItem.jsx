/* eslint-disable react/prop-types */
import "./Expertise.css";

const ExpertiseItem = (props) => {
  return (
    <div className="expertise__item">
      <i className={props.icon}></i>
      <h4>{props.heading}</h4>
      <p>
        This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet Aenean.
      </p>
    </div>
  );
};

export default ExpertiseItem;
