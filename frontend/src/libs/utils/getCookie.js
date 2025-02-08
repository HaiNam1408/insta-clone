// Function to get the value of a cookie by name
export const getCookie = (name) => {
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    const cookieName = cookiePair[0].trim();
    if (cookieName === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};
