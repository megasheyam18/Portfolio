// EmailJS Configuration Verification Script
// Run this in your browser console to verify setup

console.log('🔍 EmailJS Configuration Check');
console.log('================================');

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log('Service ID:', serviceId ? '✅ SET' : '❌ MISSING');
console.log('Template ID:', templateId ? '✅ SET' : '❌ MISSING');
console.log('Public Key:', publicKey ? '✅ SET' : '❌ MISSING');

if (serviceId && templateId && publicKey) {
  console.log('🎉 All environment variables are configured!');

  // Test EmailJS connection
  console.log('📤 Testing EmailJS connection...');

  import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/public/index.js')
    .then(emailjs => {
      emailjs.init(publicKey);

      emailjs.send(
        serviceId,
        templateId,
        {
          from_name: 'Test User',
          from_email: 'test@example.com',
          subject: 'Configuration Test',
          message: 'This is a test message to verify EmailJS setup.',
          to_name: 'Portfolio Owner',
          submission_time: new Date().toLocaleString(),
          reply_to: 'test@example.com'
        }
      )
      .then(result => {
        console.log('✅ EmailJS Test Successful:', result);
        console.log('📧 Check your email inbox for the test message!');
      })
      .catch(error => {
        console.error('❌ EmailJS Test Failed:', error);
        console.log('🔧 Check your EmailJS dashboard configuration');
      });
    })
    .catch(error => {
      console.error('❌ Failed to load EmailJS:', error);
    });

} else {
  console.log('❌ Environment variables not configured!');
  console.log('📖 Follow EMAILJS_DEBUG_GUIDE.md to set up EmailJS');
}