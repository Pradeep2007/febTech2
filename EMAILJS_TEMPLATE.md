# EmailJS Template Setup

## Create This Exact Template in EmailJS

1. Go to EmailJS Dashboard → "Email Templates"
2. Create New Template
3. Use these exact settings:

### Template Settings:
- **Template Name**: FabTech Contact Form
- **Subject**: New Contact from {{from_name}}

### Email Content:
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Organization: {{organization}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent to: {{to_email}}
```

### Template Variables Used:
Make sure your template includes these variables (exactly as written):
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{organization}}`
- `{{inquiry_type}}`
- `{{message}}`
- `{{reply_to}}`
- `{{to_email}}`

### Test Your Template:
1. In EmailJS dashboard, click "Test" on your template
2. Fill in sample values for each variable
3. Send a test email to verify it works

## Common Template Issues:

❌ **Wrong variable names** (e.g., `{{name}}` instead of `{{from_name}}`)
❌ **Missing variables** in template
❌ **Typos in variable names**
❌ **Wrong email service connected**

## After Creating Template:
1. Copy the Template ID (e.g., `template_abc123`)
2. Update your .env file with this Template ID
3. Restart your development server
4. Test the form again
