export function hashPassword(password) {
  return password;
}
export function verifyPassword(password, hashedPassword) {
  return password === hashedPassword;
}
