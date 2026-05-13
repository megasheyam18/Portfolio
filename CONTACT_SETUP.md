# Portfolio Contact Form Setup

## EmailJS Configuration

This portfolio uses EmailJS for sending contact form messages directly to your inbox without opening the user's email client.

### Setup Steps:

1. **Sign up at EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.

2. **Create an Email Service**:
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, or any email provider)
   - Follow the setup instructions to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates" in your dashboard
   - Create a new template with the following content:

   **Subject:**
   ```
   Portfolio Contact: {{subject}}
   ```

   **HTML Body:**
   ```html
   <h2>New Portfolio Contact Message</h2>

   <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>

   <hr>
   <p><small>Sent at: {{submission_time}}</small></p>
   ```

   **Plain Text Body:**
   ```
   New Portfolio Contact Message

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   Message:
   {{message}}

   ---
   Sent at: {{submission_time}}
   ```

4. **Get Your Credentials**:
   - Service ID: Found in Email Services section
   - Template ID: Found in Email Templates section
   - Public Key: Found in Account > General settings

5. **Configure Environment Variables**:
   - Create a `.env` file in your project root
   - Add your EmailJS credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Deploy and Test**:
   - Deploy your portfolio
   - Test the contact form
   - Check your email inbox for new messages

## Features

- ✅ Direct email sending (no mailto redirects)
- ✅ Form validation (required fields, email format, message length)
- ✅ Loading states and user feedback
- ✅ Responsive design
- ✅ Production-ready error handling
- ✅ Secure environment variable configuration

## Alternative Solutions

If you prefer not to use EmailJS, consider:
- **Formspree**: Simple form handling service
- **Netlify Forms**: If deploying on Netlify
- **Vercel Forms**: If deploying on Vercel
- **Custom Backend**: Node.js + Express + Nodemailer

## Security Notes

- Never commit your `.env` file to version control
- EmailJS public keys are safe to expose (they're meant for frontend use)
- Service and Template IDs can be exposed as well
- The contact form includes basic validation but consider additional server-side validation for production use