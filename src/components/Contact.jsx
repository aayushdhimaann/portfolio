import {
  faChevronCircleDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./Footer";

const Contact = () => {
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
              <input type="submit" value="Send Message" />
            </form>
          </div>
          <div className="right-container">
            <p className="contact-info">Contact Information</p>
            <p className="ques">
              If you have any question just send a message !
            </p>
            <div className="address-container">
              <div className="address-sub-container">
                <div className="address-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address-data">
                  <p>
                    <span>Address: </span>
                    Satyam Colony, Kairana District Shamli, Uttar Pradesh Pin
                    Code- 247774
                  </p>
                </div>
              </div>
              <div className="address-sub-container">
                <div className="address-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address-data">
                  <p>
                    <span>Address: </span>
                    Satyam Colony, Kairana District Shamli, Uttar Pradesh Pin
                    Code- 247774
                  </p>
                </div>
              </div>
              <div className="address-sub-container">
                <div className="address-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address-data">
                  <p>
                    <span>Address: </span>
                    Satyam Colony, Kairana District Shamli, Uttar Pradesh Pin
                    Code- 247774
                  </p>
                </div>
              </div>
              <div className="address-sub-container">
                <div className="address-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address-data">
                  <p>
                    <span>Address: </span>
                    Satyam Colony, Kairana District Shamli, Uttar Pradesh Pin
                    Code- 247774
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
