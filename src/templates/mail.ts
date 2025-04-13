export const verifyEmail = ({
  url,
  username,
}: {
  url: string;
  username: string;
}) => {
  return `
      <h1>Verify your email</h1>
      <p>Hi ${username},</p>
      <p>Please click the link below to verify your email address:</p>
      <a href="${url}">Verify Email</a>
    `;
};

export const resetPasswordEmail = ({
  resetLink,
  username,
}: {
  resetLink: string;
  username: string;
}) => {
  return `
      <h1>Reset Your Password</h1>
      <p>Hi ${username},</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
    `;
};

export const welcomeEmail = ({ username }: { username: string }) => {
  return `
      <h1>Welcome to MyApp!</h1>
      <p>Hi ${username},</p>
      <p>Thank you for joining us. We're excited to have you on board!</p>
    `;
};
