export function similarProp(name, email) {
  const obj = JSON.parse(localStorage.getItem('users'));
  if (!obj) {
    return false;
  }
  const arr = Object.values({ obj });
  for (value in arr[0]) {
    const val = arr[0][value];
    if (val.name === name || val.email === email) {
      return true;
    }
  }
}

export function checkUserProp(name, psw) {
  const obj = JSON.parse(localStorage.getItem('users'));
  if (!obj) {
    return false;
  }
  const arr = Object.values({ obj });

  for (value in arr[0]) {
    const val = arr[0][value];
    if (val.name === name || val.email === name) {
      if (val.password === psw) {
        return val.name;
      }
    }
  }
}
