export function createMarcupSignIn() {
    return `
    <button class="autorization_close_btn">X</button>
    <form action="submit" class="js_form_autorization">
        <input type="text"/>
        <input type="text" />
        <button type="submit">SIGN IN</button>
      </form>
      <div class="autorization_links">
        <a href="#" class="js_signup_link">SIGN UP</a>
        <a href="#" class="js_signin_link">SIGN IN</a>
      </div>`;
}
  
export function createMarcupSignUp() {
  return `
  <button class="autorization_close_btn">X</button>
  <form action="submit" class="js_form_signup">
    <input type="text"/>
    <input type="email"/>
    <input type="text" />
    <button type="submit">SIGN UP</button>
  </form>
  <div class="autorization_links">
    <a href="#" class="js_signup_link">SIGN UP</a>
    <a href="#" class="js_signin_link">SIGN IN</a>
  </div>`;
}