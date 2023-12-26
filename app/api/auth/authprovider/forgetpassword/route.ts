import nodemailer from 'nodemailer';
import crypto from 'crypto'; // Import the crypto module
import Healthcare from '@/models/Healthcare';
import connect from '@/utils/db';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  // Connect to the database
  await connect();

  // Find the healthcare by email
  const healthcare = await Healthcare.findOne({ email });
  if (!healthcare) {
    return res.status(404).json({ message: 'Healthcare not found' });
  }

  // Generate a random password reset token using crypto module
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Save the reset token in the database
  healthcare.resetToken = resetToken;
  healthcare.resetTokenExpiration = Date.now() + 3600000; // 1 hour
  await healthcare.save();

  // Set up NodeMailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email provider
    auth: {
      user: process.env.EMAIL_USERNAME, // This should be 'user', not 'healthcare'
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: 'your-email@example.com',
    to: healthcare.email,
    subject: 'Password Reset',
    text: `You requested a password reset. Click this link to set a new password: ${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Email sent' });
  });
}
