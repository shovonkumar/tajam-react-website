import Client from "./Client";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 text-center text-md-start">
          <ContactForm />
          <Client />
        </div>
      </div>
    </section>
  );
};

export default Contact;
