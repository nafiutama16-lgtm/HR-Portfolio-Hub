import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Semua kolom wajib diisi' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'nafiutama16@gmail.com',
      replyTo: email,
      subject: `Pesan baru dari ${name} (Portfolio Contact Form)`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Gagal mengirim pesan, coba lagi nanti.' });
  }
}