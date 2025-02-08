export function hideEmail(email) {
  const [localPart, domain] = email.split('@');
  const localPartLength = localPart.length;
  const hiddenLocalPart =
    localPart.charAt(0) + '*'.repeat(localPartLength - 2) + localPart.charAt(localPartLength - 1);
  const hiddenEmail = `${hiddenLocalPart}@${domain}`;

  return hiddenEmail;
}
