import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface KundliPayload {
  name: string;
  email: string;
  whatsapp: string;
  gender: string;
  profession: string;
  jobType: string;
  currentLocation: string;
  dob: string;
  tob: string;
  pob: string;
  concern: string;
  query?: string;
  company?: string; // Honeypot field
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(request: Request) {
  let body: KundliPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently handle honeypot
  if (body.company) {
    return Response.json({ ok: true });
  }

  const {
    name,
    email,
    whatsapp,
    gender,
    profession,
    jobType,
    currentLocation,
    dob,
    tob,
    pob,
    concern,
    query = "",
  } = body;

  if (!name || !email || !whatsapp || !gender || !profession || !jobType || !currentLocation || !dob || !tob || !pob) {
    return Response.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Kundli form: SMTP env vars are not configured.");
    return Response.json({ ok: false, error: "Email is not configured. Please try again later." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const to = CONTACT_TO || "sales@adesignerahmedabad.com";
  const from = CONTACT_FROM || SMTP_USER;

  const textContent = `
New Kundli Details Submission:
----------------------------------------
Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp}
Gender: ${gender}

Profession Details:
----------------------------------------
Profession: ${profession}
Job/Business Type: ${jobType}
Current City/Country: ${currentLocation}

Birth Details:
----------------------------------------
Date of Birth: ${dob}
Time of Birth: ${tob}
Place of Birth: ${pob}

Additional Details:
----------------------------------------
Main Concern: ${concern}
Detailed Query: ${query}
  `.trim();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%); color: #ffffff; padding: 24px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px; color: #f59e0b;">New Kundli Lead</h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.8;">Birth Details & Kundli Request</p>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <h3 style="color: #1e1b4b; border-bottom: 2px solid #f59e0b; padding-bottom: 6px; margin-top: 0;">1. Personal Info</h3>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>WhatsApp:</strong> ${esc(whatsapp)}</p>
        <p><strong>Gender:</strong> ${esc(gender)}</p>

        <h3 style="color: #1e1b4b; border-bottom: 2px solid #f59e0b; padding-bottom: 6px; margin-top: 24px;">2. Profession & Location</h3>
        <p><strong>Profession:</strong> ${esc(profession)}</p>
        <p><strong>Job/Business/Role:</strong> ${esc(jobType)}</p>
        <p><strong>Current City/Country:</strong> ${esc(currentLocation)}</p>

        <h3 style="color: #1e1b4b; border-bottom: 2px solid #f59e0b; padding-bottom: 6px; margin-top: 24px;">3. Birth Details</h3>
        <p><strong>Date of Birth:</strong> ${esc(dob)}</p>
        <p><strong>Time of Birth:</strong> ${esc(tob)}</p>
        <p><strong>Place of Birth:</strong> ${esc(pob)}</p>

        <h3 style="color: #1e1b4b; border-bottom: 2px solid #f59e0b; padding-bottom: 6px; margin-top: 24px;">4. Concerns & Queries</h3>
        <p><strong>Area of Concern:</strong> ${esc(concern)}</p>
        ${query ? `<p><strong>Detailed Query:</strong></p><p style="white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 4px; border: 1px solid #e2e8f0; font-style: italic;">${esc(query)}</p>` : "<p>No specific query provided.</p>"}
      </div>
      <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
        Received from Cosmologic Growth Website Kundli Form.
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `Cosmologic Growth <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New Kundli Query: ${name} (${concern})`,
      text: textContent,
      html: htmlContent,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Kundli form submission email failed:", err);
    return Response.json({ ok: false, error: "Could not send details. Please try again later." }, { status: 502 });
  }
}
