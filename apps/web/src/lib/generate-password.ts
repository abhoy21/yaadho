export const generatePassword = ({
  email,
  name,
}: {
  email: string;
  name: string;
}): string => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const emailParts = email.split("@");
  const nameParts = name.split(" ");
  const randomString =
    characters[Math.floor(Math.random() * characters.length)];
  return (
    emailParts[0] + nameParts[0].substring(0, 1) + randomString + nameParts[1]
  );
};
