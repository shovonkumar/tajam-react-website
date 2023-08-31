import Footer from "../components/footer/Footer";
import Story from "../components/story/Story";
import Video from "../components/video/Video";

const About = () => {
  return (
    <>
      <Story />
      <Video />
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, #00e0d0, #3697c3)",
        }}
      ></div>
      <Footer />
    </>
  );
};

export default About;
