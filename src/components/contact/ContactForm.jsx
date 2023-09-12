const ContactForm = () => {
  return (
    <div
      className="col-md-6"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-offset="500"
    >
      <h2 className="title mb-4 mb-md-5">Give Us A Good News</h2>
      <form action="https://formspree.io/f/xknlbqza" method="POST">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
