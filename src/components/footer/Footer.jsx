import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-white" data-aos="fade-up">
        <div className="row gx-5 gx-lg-4 gx-xl-5 gy-5">
          <div className="col-md-6 col-lg-4 footer__left text-center text-lg-start" data-aos="fade-up" data-aos-delay="100">
            <img src="./images/logo.png" alt="Logo" className="text-center" />
            <p>
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4 mt-lg-5 justify-content-center justify-content-lg-start">
              <a href="#">Help</a>
              <a href="#">Terms &amp; Conditions </a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 footer__middle text-center text-lg-start" data-aos="fade-up" data-aos-delay="200">
            <h4>Our Studio</h4>
            <div className="d-flex gap-3 gap-lg-4 justify-content-center justify-content-lg-start">
              <i className="fa-solid fa-location-dot"></i>
              <span>
                Ruko cucruk, Jl. Radio luar <br /> No-12, Kalideres - Jakarta
                Barat <br /> 11480 - Indonesia
              </span>
            </div>
            <div className="d-flex gap-3 mt-3 mt-lg-4 justify-content-center justify-content-lg-start">
              <i className="fa-solid fa-phone"></i>
              <span>(+12) 123 456 789</span>
            </div>
          </div>
          <div className="col-12 col-lg-4 footer__right text-center text-lg-start" data-aos="fade-up" data-aos-delay="300">
            <h4>Stay in Touch</h4>
            <form className="d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
              <input type="email" placeholder="Subscribe Our Newsletter" />
              <button type="submit">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
            <div className="social d-flex align-items-center justify-content-center justify-content-lg-start gap-4 mt-4">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <span className="text-left text-lg-end">
              Made by &nbsp;
              <a href="https://shovonkumar.netlify.app" target="&#95;.blank">
                Shovon Kumar
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
