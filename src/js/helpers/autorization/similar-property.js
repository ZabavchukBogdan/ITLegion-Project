export function similarProp(name, email) {
  const obj = JSON.parse(localStorage.getItem('users'));
  if (!obj) {
    return false;
  }
  const arr = Object.values({ obj });
  for (let value in arr[0]) {
    const item = arr[0][value];
    if (item.name === name || item.email === email) {
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

  for (let value in arr[0]) {
    const res = arr[0][value];
    if (res.name === name || res.email === name) {
      if (res.password === psw) {
        return res.name;
      }
    }
  }
}
