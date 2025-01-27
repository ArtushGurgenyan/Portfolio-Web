import "./contact.style.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact</h1>
          <p>
            Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
            vehicula enim, non aliquam risus.
          </p>
        </div>

        <div className="contact-form">
          <form action="">
            <div className="row">
              <div className="col">
                <input
                  className="txt-input"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="txt-input"
                  placeholder="Your Email"
                  type="text"
                />
                <input
                  className="txt-input"
                  placeholder="Your Phone"
                  type="text"
                />
              </div>
              <div className="col">
                <textarea placeholder="Your Message" name="" id=""></textarea>
              </div>
            </div>
            <input className="btn-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
