import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import Healthcare from '@/models/Healthcare';
import connect from '@/utils/db';

export default async function updatePassword(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { token, newPassword } = req.body;

  await connect();

  // Find the healthcare by reset token
  const healthcare = await Healthcare.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() }
  });

  if (!healthcare) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 12);

  // Update the user's password and remove the reset token
  healthcare.password = hashedPassword;
  healthcare.resetToken = undefined;
  healthcare.resetTokenExpiration = undefined;
  await healthcare.save();

  res.status(200).json({ message: 'Password updated successfully' });
}
