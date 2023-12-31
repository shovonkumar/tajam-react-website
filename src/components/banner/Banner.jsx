import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container text-white text-center">
        <h1 data-aos="zoom-in" data-aos-delay="100">We Are Awesome Creative Agency</h1>
        <p data-aos="zoom-in" data-aos-delay="200">
          This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit
          auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
          elit consequat ipsum.
          <span>
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
            cursus a sit amet mauris. Morbi accumsan ipsum velit.
          </span>
        </p>
        <button className="button" data-aos="zoom-in" data-aos-delay="300">Learn More</button>
      </div>
    </section>
  );
};

export default Banner;
