import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Expertise from "../components/expertise/Expertise";
import Footer from "../components/footer/Footer";
import Story from "../components/story/Story";
import Team from "../components/team/Team";
import Video from "../components/video/Video";
import Works from "../components/works/Works";

const Home = () => {
  return (
    <>
      <Banner />
      <Story />
      <Video />
      <Expertise />
      <Team />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
