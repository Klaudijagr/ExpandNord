import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, company, email, interest, message, recipients } = body

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: recipients.join(', '),
      replyTo: email,
      subject: `New Contact Form Submission - ${interest}`,
      text: `
Name: ${fullName}
Company: ${company}
Email: ${email}
Interest: ${interest}
Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Interest:</strong> ${interest}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 