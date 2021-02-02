export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  console.log(re.test(email));
  return re.test(email);
}