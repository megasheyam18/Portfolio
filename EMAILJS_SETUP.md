# 🚀 Complete EmailJS Setup Guide

## Why You're Not Receiving Emails

The contact form is configured to use **EmailJS** for sending emails. Since the environment variables in `.env` are set to placeholder values, the form throws an error and doesn't send emails. You need to set up EmailJS and replace the placeholders with real credentials.

## Technologies Used in This Project

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Flexbox, Grid, CSS Variables)
- **Icons**: React Icons library
- **Email Service**: EmailJS (for contact form)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Deployment Ready**: Optimized for Vercel/Netlify

## Step-by-Step EmailJS Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email

### 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup wizard:
   - For Gmail: Enable 2FA, generate App Password, use it
   - For others: Follow their specific instructions

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Configure the template:

**Subject:**

```
Portfolio Contact: {{subject}}
```

**To Email:**

```
you-email@gmail.com
```

**From Name:**

```
{{from_name}}
```

**From Email:**

```
{{from_email}}
```

**Reply To:**

```
{{from_email}}
```

**HTML Body:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>New Portfolio Contact</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #129eaa;">New Portfolio Contact Message</h2>

    <div
      style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;"
    >
      <p><strong>From:</strong> {{from_name}}</p>
      <p><strong>Email:</strong> {{from_email}}</p>
      <p><strong>Subject:</strong> {{subject}}</p>
      <p><strong>Message:</strong></p>
      <div
        style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #129eaa;"
      >
        {{message}}
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid #eee;" />
    <p style="color: #666; font-size: 12px;">Sent at: {{submission_time}}</p>
  </body>
</html>
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

4. Save the template

### 4. Get Your Credentials

1. **Service ID**: In "Email Services" section, click on your service to get the ID
2. **Template ID**: In "Email Templates" section, click on your template to get the ID
3. **Public Key**: In Account → General → Public Key

### 5. Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your real credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_1234567890abcdef
VITE_EMAILJS_TEMPLATE_ID=template_abcdef123456
VITE_EMAILJS_PUBLIC_KEY=ABCdef1234567890xyz
```

### 6. Test the Contact Form

1. Save the `.env` file
2. Restart your development server: `npm run dev`
3. Go to the contact section
4. Fill out and submit the form
5. Check your email inbox

## Troubleshooting

### If emails still don't arrive:

1. Check your spam/junk folder
2. Verify your email service credentials in EmailJS
3. Check browser console for errors
4. Ensure `.env` file is in the project root

### Common Issues:

- **2FA Required**: Gmail requires App Password, not regular password
- **Template Variables**: Make sure all {{variables}} match exactly
- **Service Limits**: Free plan has daily limits (200 emails/day)

## Alternative Solutions

If EmailJS doesn't work for you, consider:

- **Formspree**: https://formspree.io/ (simple setup)
- **Netlify Forms**: If deploying on Netlify
- **Custom Backend**: Node.js + Express + Nodemailer

## Security Notes

- ✅ Public Key is safe to expose (designed for frontend)
- ✅ Never commit `.env` file to Git
- ✅ Service/Template IDs are also safe to expose
- ✅ All sensitive data is server-side in EmailJS

Once you complete the setup, your contact form will send professional emails directly to your inbox without opening any email clients!
