# 🚨 EmailJS Contact Form - Production Debugging & Setup Guide

## 🔍 **Problem Analysis**

Your contact form is failing because:

1. **Environment Variables Not Set**: The `.env` file contains placeholder values
2. **EmailJS Dashboard Not Configured**: Service, template, or credentials are incorrect
3. **Template Variable Mismatch**: Frontend variables don't match EmailJS template
4. **Missing Initialization**: EmailJS needs proper initialization

## 🛠️ **Complete Step-by-Step Fix**

### **Step 1: Verify Environment Variables**

1. Open `.env` file in project root
2. Replace placeholder values with your real EmailJS credentials
3. **Restart development server**: `npm run dev`

Current `.env` file should look like:
```env
VITE_EMAILJS_SERVICE_ID=service_1234567890abcdef
VITE_EMAILJS_TEMPLATE_ID=template_abcdef123456
VITE_EMAILJS_PUBLIC_KEY=ABCdef1234567890xyz
```

### **Step 2: Set Up EmailJS Dashboard**

1. **Create Account**: Go to [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Add Email Service**:
   - Go to "Email Services" → "Add New Service"
   - Choose your email provider (Gmail recommended)
   - For Gmail:
     - Service Name: `gmail_portfolio`
     - Connect Account
     - **Important**: Use App Password (not regular password)
     - How to get App Password:
       1. Go to Google Account settings
       2. Security → 2-Step Verification → App passwords
       3. Generate password for "Mail"
       4. Use this 16-character password in EmailJS

3. **Create Email Template**:
   - Go to "Email Templates" → "Create New Template"
   - Use this exact configuration:

   **Template Name**: `portfolio_contact`

   **Subject**:
   ```
   Portfolio Contact: {{subject}}
   ```

   **To Email**:
   ```
   your-email@gmail.com
   ```

   **From Name**:
   ```
   {{from_name}}
   ```

   **From Email**:
   ```
   {{from_email}}
   ```

   **Reply To**:
   ```
   {{reply_to}}
   ```

   **HTML Body**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="utf-8">
       <title>New Portfolio Contact</title>
       <style>
           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
           .header { background: #129eaa; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
           .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
           .field { margin: 10px 0; }
           .label { font-weight: bold; color: #129eaa; }
           .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #129eaa; }
           .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
       </style>
   </head>
   <body>
       <div class="header">
           <h2>New Portfolio Contact Message</h2>
       </div>
       <div class="content">
           <div class="field">
               <span class="label">From:</span> {{from_name}} ({{from_email}})
           </div>
           <div class="field">
               <span class="label">Subject:</span> {{subject}}
           </div>
           <div class="field">
               <span class="label">Message:</span>
               <div class="message">{{message}}</div>
           </div>
           <div class="footer">
               Sent at: {{submission_time}}
           </div>
       </div>
   </body>
   </html>
   ```

   **Plain Text Body**:
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
   - **Service ID**: Click on your service → Copy Service ID
   - **Template ID**: Click on your template → Copy Template ID
   - **Public Key**: Account → General → Public Key

### **Step 3: Update Environment Variables**

Replace the values in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### **Step 4: Test the Configuration**

1. Restart your dev server: `npm run dev`
2. Open browser console (F12 → Console)
3. Go to contact form
4. Fill and submit the form
5. Check console for debug messages:
   - Should show: "EmailJS Config: {serviceId: 'SET', templateId: 'SET', publicKey: 'SET'}"
   - Should show: "Sending email with params: {...}"
   - Should show: "EmailJS Success: {...}"

### **Step 5: Verify Email Delivery**

1. Check your Gmail inbox
2. Also check Spam/Junk folder
3. The email should have:
   - Subject: "Portfolio Contact: [User Subject]"
   - From: Your connected Gmail account
   - Reply-To: User's email address
   - Professional HTML formatting

## 🐛 **Common Issues & Solutions**

### **Issue: "EmailJS configuration is missing"**
- **Cause**: Environment variables are not set or server not restarted
- **Solution**: Update `.env` and restart `npm run dev`

### **Issue: "Invalid login" or "Authentication failed"**
- **Cause**: Wrong Gmail password or not using App Password
- **Solution**:
  1. Enable 2FA on Gmail
  2. Generate App Password: https://myaccount.google.com/apppasswords
  3. Use the 16-character App Password in EmailJS

### **Issue: "Template not found"**
- **Cause**: Template ID is wrong or template not saved
- **Solution**: Double-check Template ID in EmailJS dashboard

### **Issue: Emails going to spam**
- **Cause**: Gmail treating as spam initially
- **Solution**: Mark emails as "Not spam" and add to contacts

### **Issue: "CORS error" or "Network error"**
- **Cause**: Browser blocking requests
- **Solution**: Ensure you're running on `localhost` or HTTPS in production

### **Issue: Emails not sending but no error**
- **Cause**: EmailJS service limits exceeded
- **Solution**: Check EmailJS dashboard for usage limits (free plan: 200/month)

## 🔍 **Advanced Debugging**

### **Check Browser Console**
1. Open Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. Look for these messages:
   ```
   EmailJS Config: {serviceId: "SET", templateId: "SET", publicKey: "SET"}
   Sending email with params: {from_name: "...", from_email: "...", ...}
   EmailJS Success: {status: 200, text: "OK"}
   ```

### **Test EmailJS Directly**
Add this to your browser console to test EmailJS:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: 'Test User',
  from_email: 'test@example.com',
  subject: 'Test Subject',
  message: 'Test message',
  to_name: 'Your Name',
  submission_time: new Date().toString(),
  reply_to: 'test@example.com'
}).then(result => console.log('Success:', result), error => console.log('Error:', error));
```

### **Verify Template Variables**
Ensure your EmailJS template uses exactly these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_name}}`
- `{{submission_time}}`
- `{{reply_to}}`

## 📊 **Production Deployment**

### **For Vercel/Netlify Deployment**
1. Add environment variables in your hosting dashboard
2. Ensure `VITE_` prefix for client-side variables
3. Test the contact form after deployment

### **Security Best Practices**
- ✅ Public Key is safe to expose (client-side only)
- ✅ Never commit `.env` to Git
- ✅ Service/Template IDs are also safe to expose
- ✅ Use HTTPS in production

## 🎯 **Success Checklist**

- [ ] `.env` file updated with real credentials
- [ ] Development server restarted
- [ ] EmailJS service connected with App Password
- [ ] Email template created with correct variables
- [ ] Test form submission works
- [ ] Email received in inbox
- [ ] Reply-To functionality works
- [ ] No console errors

## 🚀 **Final Testing**

Once everything is set up:

1. Fill the contact form with test data
2. Submit and check console for success messages
3. Verify email arrives in your inbox
4. Test reply functionality
5. Confirm no redirects or mailto links

**Your contact form should now send professional emails directly to your inbox without any client-side email applications opening!**

If you still have issues, check the console errors and refer to the troubleshooting section above.