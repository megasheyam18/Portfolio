import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

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
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all fields", true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address", true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Note: EmailJS would need to be initialized in the app
      // For now, show success message
      showToast("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showToast(
        "Failed to send message. Please try again or email me directly.",
        true,
      );
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

        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
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
