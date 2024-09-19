import "./Contact.css";
import msg_icon from "./../../assets/msg-icon.png";
import mail_icon from "./../../assets/mail-icon.png";
import phone_icon from "./../../assets/phone-icon.png";
import location_icon from "./../../assets/location-icon.png";
import { FaLocationArrow } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .send(
        "service_nigxg7q",
        "template_h5zvhsj", // Use your actual template ID
        formData,
        "F4lJ4SV6ilEJfvkug" // Use your actual user ID
      )
      .then((response) => {
        console.log("Email successfully sent:", response); // Optional: Log the response for debugging
        setResult("Email sent successfully");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        setResult("Failed to send email");
        console.error("Email sending error:", error);
        setIsLoading(false); // Stop loading
      });
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit now"}
            <FaLocationArrow className="arrow white-arrow" />
          </button>
        </form>

        {/* Display result message with conditional styling */}
        <span
          style={{
            color: result === "Email sent successfully" ? "#000f38" : "red",
            marginTop: "10px",
            display: "block",
          }}
        >
          {result}
        </span>
      </div>
    </div>
  );
}

export default Contact;
