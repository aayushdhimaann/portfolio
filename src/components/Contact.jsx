import {
  faChevronCircleDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import ContactDisplay from "./ContactDisplay";
import { motion } from "framer-motion";

const Contact = () => {
  const contact = [
    {
      id: "cc1",
      icon: faLocationDot,
      title: "Address: ",
      description:
        "Satyam Colony, Kairana District Shamli, Uttar Pradesh Pin Code- 247774",
    },
    {
      id: "cc2",
      icon: faPhone,
      title: "Phone: ",
      description: "+91 9416947392",
    },
    {
      id: "cc3",
      icon: faEnvelope,
      title: "Email: ",
      description: "aayush70dhiman@gmail.com",
    },
  ];
  return (
    <>
      <div className="contact">
        <h1 className="contact-heading">
          Contact <FontAwesomeIcon icon={faChevronCircleDown} />
        </h1>
        <div className="contact-container">
          <div className="left-container">
            <h1>Let's Talk</h1>
            <form
              action="mailto:aayush70dhiman@gmail.com"
              encType="text/plain"
              method="POST"
              className="myform"
            >
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Name"
                required
              />
              <br />
              <br />
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Email"
                required
              />
              <br />
              <br />
              <textarea
                name="Message"
                id="message"
                placeholder="Message"
                className="message"
                required
              ></textarea>
              <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500 }}
                type="submit"
                className="submitbutton"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className="right-container">
            <p className="contact-info">Contact Information</p>
            <p className="ques">
              If you have any question just send a message !
            </p>
            <div className="address-container">
              {contact.map((item) => (
                <ContactDisplay
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
