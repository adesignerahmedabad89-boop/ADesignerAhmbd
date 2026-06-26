# Brandingo SMTP Email Configuration Guide

This guide describes how the contact form email system is configured and how to set up the SMTP environment variables for production (Vercel) and local development.

## 1. Contact Form Logic
The API route handling contact form submissions is located at [route.ts](file:///c:/Users/UPL/jkbrandingindia/app/api/contact/route.ts).
- Default recipient email is set to: **`sales@brandingo.in`** (fallback if `CONTACT_TO` env variable is not specified).
- Mail client used: **Titan Email (powered by GoDaddy)**.

---

## 2. Production Environment Variables (e.g., Vercel)
Add the following Environment Variables in your hosting dashboard:

| Environment Variable | Recommended Value | Description |
| :--- | :--- | :--- |
| `SMTP_HOST` | `smtp.titan.email` | Titan Outgoing SMTP server address |
| `SMTP_PORT` | `465` | SSL connection port |
| `SMTP_SECURE` | `true` | Enables secure SSL transport |
| `SMTP_USER` | `sales@brandingo.in` | Authenticating sender email |
| `SMTP_PASS` | `[EMAIL_ACCOUNT_PASSWORD]` | The actual login password for sales@brandingo.in |
| `CONTACT_TO` | `sales@brandingo.in` | Target recipient email address |
| `CONTACT_FROM` | `sales@brandingo.in` | Sender address shown in the "From" header |

*Note: After adding environment variables in Vercel, trigger a new deployment to apply the changes.*

---

## 3. Local Development Setup
Create a file named `.env.local` in the project root directory and add the following lines:
```env
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=sales@brandingo.in
SMTP_PASS=YOUR_EMAIL_PASSWORD_HERE
CONTACT_TO=sales@brandingo.in
CONTACT_FROM=sales@brandingo.in
```

---

## 4. Verification Script
We have included a quick utility script to verify the SMTP connection details:
```bash
node scripts/verify-smtp.mjs
```
This script reads `.env.local` and tests the SMTP credentials without sending an actual email.

---

## 5. Troubleshooting (DNS / MX Records Warning)
If you configure all variables correctly but still do not receive emails, check the domain's DNS MX records. In GoDaddy DNS management:
- Ensure the MX records for `brandingo.in` are correctly pointed to Titan servers:
  - Host: `@` | Priority: `10` | Destination: `mx1.titan.email`
  - Host: `@` | Priority: `20` | Destination: `mx2.titan.email`
