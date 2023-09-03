import Client from "./Client";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row gy-5 text-center text-md-start">
          <ContactForm />
          <Client />
        </div>
      </div>
    </section>
  );
};

export default Contact;
