export function createLocalProp(name, email, psw) {
  const obj = JSON.parse(localStorage.getItem('users'));
  const id = Date.now();
  const newObj = {
    ...obj,
    [id]: {
      name,
      email,
      password: psw,
    },
  };
  const localValues = JSON.stringify(newObj);
  
  localStorage.setItem('users', localValues);
}
