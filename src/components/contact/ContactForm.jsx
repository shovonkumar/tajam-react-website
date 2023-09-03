const ContactForm = () => {
  return (
    <div className="col-md-6">
      <h2 className="title mb-4 mb-md-5">Give Us A Good News</h2>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
