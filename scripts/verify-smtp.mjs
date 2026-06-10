// Quick SMTP login check for the contact-form mailbox.
// Reads .env.local and tries to authenticate (no email is sent).
//   Run:  node scripts/verify-smtp.mjs
import { readFileSync } from "node:fs";
import { join } from "node:path";
import nodemailer from "nodemailer";

const env = Object.fromEntries(
  readFileSync(join(process.cwd(), ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.trimStart().startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT ?? 465),
  secure: env.SMTP_SECURE ? env.SMTP_SECURE === "true" : Number(env.SMTP_PORT ?? 465) === 465,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
});

transporter.verify((err) => {
  if (err) {
    console.log("❌ SMTP login FAILED:", err.message.split("\n")[0]);
    console.log("   (535 = wrong password OR Titan needs an app password / third-party access enabled.)");
    process.exit(1);
  }
  console.log("✅ SMTP login OK for", env.SMTP_USER, "— the contact form is ready to send.");
});
