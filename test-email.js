const brevo = require('@getbrevo/brevo');

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

const sendSmtpEmail = new brevo.SendSmtpEmail();
sendSmtpEmail.subject = "Test Email from Brevo";
sendSmtpEmail.htmlContent = "<html><body><h1>Test Email</h1></body></html>";
sendSmtpEmail.sender = { name: "Test", email: "your-email@gmail.com" }; // CHANGE THIS!
sendSmtpEmail.to = [{ email: "your-email@gmail.com", name: "Test" }]; // CHANGE THIS!

apiInstance.sendTransacEmail(sendSmtpEmail).then(
  data => console.log('✅ Email sent successfully!', data),
  error => console.error('❌ Error:', error)
);
