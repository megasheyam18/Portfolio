import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (message, isError = false) => {
    setToast({ message, isError });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      showToast("Please enter your name", true);
      return;
    }
    if (!formData.email.trim()) {
      showToast("Please enter your email", true);
      return;
    }
    if (!formData.subject.trim()) {
      showToast("Please enter a subject", true);
      return;
    }
    if (!formData.message.trim()) {
      showToast("Please enter your message", true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address", true);
      return;
    }

    // Message length validation
    if (formData.message.trim().length < 10) {
      showToast("Please provide a message with at least 10 characters", true);
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug logging
      console.log("EmailJS Config:", {
        serviceId: serviceId ? "SET" : "MISSING",
        templateId: templateId ? "SET" : "MISSING",
        publicKey: publicKey ? "SET" : "MISSING",
      });

      if (!serviceId || !templateId || !publicKey ||
          serviceId === "service_your_actual_service_id" ||
          templateId === "template_your_actual_template_id" ||
          publicKey === "your_actual_public_key") {
        throw new Error("EmailJS configuration is incomplete. Please check your environment variables and EmailJS dashboard.");
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: "Mega Shyam S",
        submission_time: new Date().toLocaleString(),
        reply_to: formData.email.trim(),
      };

      console.log("Sending email with params:", {
        serviceId,
        templateId,
        templateParams: { ...templateParams, message: templateParams.message.substring(0, 50) + "..." }
      });

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log("EmailJS Success:", result);

      showToast("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error("EmailJS Error:", error);

      // Detailed error handling
      let errorMessage = "Failed to send message. Please try again later.";

      if (error.message.includes("configuration")) {
        errorMessage = "Email service is not configured. Please check EMAILJS_SETUP.md for setup instructions.";
      } else if (error.text) {
        errorMessage = `Email service error: ${error.text}`;
      } else if (error.message.includes("Invalid")) {
        errorMessage = "Invalid email service configuration. Please check your credentials.";
      }

      showToast(errorMessage, true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {toast && (
        <div
          className="toast-notification"
          style={{
            background: toast.isError
              ? "linear-gradient(135deg, #ff6b6b, #c62828)"
              : "linear-gradient(135deg, #43a047, #2e7d32)",
          }}
        >
          <i
            className={`fa-solid ${toast.isError ? "fa-circle-exclamation" : "fa-circle-check"}`}
          ></i>
          <span>{toast.message}</span>
        </div>
      )}

      <div className="contact-container">
        <h2>Contact with me to sizzle your project</h2>
        <p>
          Feel free to contact me if having any questions. I'm available for new
          projects or just for chatting.
        </p>

        <form
          ref={formRef}
          className="contact-form"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <input
              type="text"
              id="contactName"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="contactEmail"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            id="contactSubject"
            name="subject"
            placeholder="Subject (e.g., Portfolio Requirement, Project Inquiry)"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            id="contactMessage"
            name="message"
            placeholder="Tell me about your project or just say hi!"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-dark full-width"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i> Sending...
              </>
            ) : (
              <>
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
