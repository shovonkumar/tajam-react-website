import "./Story.css";

const Story = () => {
  return (
    <section className="story">
      <div className="container">
        <div className="row gy-4">
          <div className="col-sm-5 order-2 order-sm-1 d-flex justify-content-center align-items-center">
            <img src="./images/about.png" alt="About Image" />
          </div>
          <div className="col-sm-7 order-1 order-sm-2 text-center text-sm-start">
            <h2>Our Story</h2>
            <p>
              This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus
            </p>
            <p className="d-none d-lg-block">
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <button className="button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
