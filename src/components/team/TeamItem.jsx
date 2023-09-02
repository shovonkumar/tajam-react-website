/* eslint-disable react/prop-types */
const TeamItem = (props) => {
  return (
    <div className="team__item">
      <img src={props.img} alt="Team Image" />
      <div className="d-flex flex-column justify-content-center align-items-center py-3">
        <h5 className="mb-0">{props.name}</h5>
        <span className="text-uppercase">{props.title}</span>
      </div>
    </div>
  );
};

export default TeamItem;
