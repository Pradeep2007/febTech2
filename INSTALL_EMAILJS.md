# How to Install and Configure EmailJS

## Current Status
✅ **Contact form is working** - it shows success/error messages and validates input
❌ **EmailJS is temporarily disabled** - form submissions are simulated
❌ **Toast notifications are disabled** - due to import issues

## Step 1: Install EmailJS Package

Run this command in your project directory:

```bash
npm install @emailjs/browser react-toastify
```

## Step 2: Enable EmailJS in Contact Form

Once the package is installed, edit `src/pages/Contact.jsx`:

1. **Uncomment the import** (line 4):
```javascript
import emailjs from '@emailjs/browser';
```

2. **Replace the onSubmit function** with the EmailJS version:

```javascript
const onSubmit = async (data) => {
  setIsSubmitting(true);
  setSubmitError('');
  
  try {
    // Check if EmailJS is configured
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      organization: data.organization || 'Not provided',
      inquiry_type: data.inquiryType,
      message: data.message,
      to_email: emailjsConfig.receiveEmail,
      reply_to: data.email
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );

    console.log('Email sent successfully:', result);
    
    // Show success message
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
    
  } catch (error) {
    console.error('Error sending email:', error);
    setSubmitError(error.message || 'Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Step 3: Enable Toast Notifications (Optional)

In `src/App.jsx`:

1. **Uncomment the imports** (lines 4-5):
```javascript
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```

2. **Uncomment the ToastContainer** (lines 66-77):
```javascript
<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>
```

In `src/pages/Contact.jsx`:

1. **Uncomment the toast import** (line 5):
```javascript
import { toast } from 'react-toastify';
```

2. **Add toast notifications** in the onSubmit function:
```javascript
// After successful submission:
toast.success('Message sent successfully! We will get back to you soon.');

// After error:
toast.error('Failed to send message. Please try again.');
```

## Step 4: Configure EmailJS Credentials

1. **Set up your EmailJS account** (follow EMAILJS_SETUP.md)
2. **Copy .env.example to .env**
3. **Add your credentials to .env**:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_RECEIVE_EMAIL=your-email@example.com
```

## Step 5: Test Everything

1. Start the server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check for:
   - Success message appears
   - Toast notification shows (if enabled)
   - Email arrives in your inbox

## Current Working Features

Even without EmailJS, your contact form currently:
- ✅ Validates all input fields
- ✅ Shows loading states
- ✅ Displays success/error messages
- ✅ Resets form after submission
- ✅ Logs form data to console

## Troubleshooting

If you get import errors:
1. Delete `node_modules` folder
2. Run `npm install`
3. Restart the development server

If EmailJS doesn't work:
1. Check your environment variables
2. Verify your EmailJS account setup
3. Check browser console for errors
