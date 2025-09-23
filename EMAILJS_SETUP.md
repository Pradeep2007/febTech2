# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to handle your contact form submissions.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Organization: {{organization}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent to: {{to_email}}
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Environment Variables

1. Copy your `.env.example` to `.env`
2. Update the following variables:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Contact Form Configuration
VITE_CONTACT_RECEIVE_EMAIL=your-email@example.com
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the submission

## Template Variables Used

The contact form sends these variables to your EmailJS template:

- `from_name`: Full name (firstName + lastName)
- `from_email`: User's email address
- `phone`: Phone number (or "Not provided")
- `organization`: Organization name (or "Not provided")
- `inquiry_type`: Selected inquiry type
- `message`: User's message
- `to_email`: Your receiving email (from env)
- `reply_to`: User's email for replies

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration is missing"**
   - Check that all environment variables are set correctly
   - Restart your development server after updating .env

2. **"Failed to send message"**
   - Verify your Service ID, Template ID, and Public Key
   - Check EmailJS dashboard for any service issues
   - Ensure your email service is properly connected

3. **Not receiving emails**
   - Check spam folder
   - Verify the receiving email address in your .env file
   - Test with a different email address

### Email Service Limits:

- Free EmailJS account: 200 emails/month
- For higher volumes, consider upgrading to a paid plan

## Security Notes

- Never commit your `.env` file to version control
- Keep your EmailJS credentials secure
- Consider rate limiting for production use
