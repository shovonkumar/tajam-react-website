import "./Team.css";
import TeamItem from "./TeamItem";
import team1 from "/images/team1.jpg";
import team2 from "/images/team2.jpg";
import team3 from "/images/team3.jpg";
import team4 from "/images/team4.jpg";

const Team = () => {
  return (
    <section className="team">
      <div className="container text-center text-white">
        <h2 className="title text-white">Meet Our Amazing Team</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet proin gravida nibh vel velit
        </p>
        <div className="row gy-5 team__item__wrapper mx-auto">
          <div className="col-sm-6 col-lg-3">
            <TeamItem img={team1} name="SEMF UCUK" title="CEO &amp; Founder" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <TeamItem img={team2} name="DIK ADALIN" title="Engineer" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <TeamItem img={team3} name="JENG KOL" title="Designer" />
          </div>
          <div className="col-sm-6 col-lg-3">
            <TeamItem img={team4} name="PET ROMAK" title="Marketing" />
          </div>
        </div>
        <div className="text-center">
          <p className="team__text">
            Become a part of our dream team. Lets join us.
          </p>
          <button className="button">We Are Hiring</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
