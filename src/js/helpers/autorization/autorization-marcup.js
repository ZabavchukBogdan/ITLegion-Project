export function createMarcupSignUp(theme) {
  return `<div class="autorization-style ${theme}">
  <button class="autorization_close_btn">
    <svg viewBox="0 0 30 28" class="autorization_svg_close ${theme}" >
        <path fill="none" stroke="#111111" style="stroke: var(--color, #111111)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2" d="M24 8l-16 16M8 8l16 16"></path>
    </svg>
  </button>
  <form action="submit" class="js_form_signup form-autorization-style ${theme}">
  <input placeholder="NAME" type="text"/>
  <div class="autorization_svg_box">
  <input placeholder="EMAIL" class="autorization_email" type="email"/>
    <svg viewBox="0 0 32 28" class="autorization_svg_mail ${theme}">
      <path fill="none" stroke="#111111" style="stroke: var(--color, #111111)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M28.667 24l-8.857-8M12.19 16l-8.857 8M2.667 9.333l10.887 7.621c0.882 0.617 1.322 0.926 1.802 1.045 0.424 0.106 0.866 0.106 1.29 0 0.479-0.119 0.92-0.428 1.802-1.045l10.887-7.621M9.067 26.667h13.867c2.24 0 3.36 0 4.216-0.436 0.753-0.384 1.365-0.996 1.748-1.748 0.436-0.856 0.436-1.976 0.436-4.216v-8.533c0-2.24 0-3.36-0.436-4.216-0.383-0.753-0.996-1.365-1.748-1.748-0.856-0.436-1.976-0.436-4.216-0.436h-13.867c-2.24 0-3.36 0-4.216 0.436-0.753 0.383-1.365 0.995-1.748 1.748-0.436 0.856-0.436 1.976-0.436 4.216v8.533c0 2.24 0 3.36 0.436 4.216 0.384 0.753 0.995 1.364 1.748 1.748 0.856 0.436 1.976 0.436 4.216 0.436z"></path>
    </svg>
  </div>
  <div class="autorization_svg_box">
  <input placeholder="PASSWORD" class="autorization_psw" type="text" />
    <svg viewBox="0 0 32 28" class="autorization_svg_psw ${theme}" >
    <path fill="none" stroke="#111111" style="stroke: var(--color, #111111)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M22.667 14.667v-4c0-3.682-2.985-6.667-6.667-6.667s-6.667 2.985-6.667 6.667v4M10.4 28h11.2c2.24 0 3.36 0 4.216-0.436 0.753-0.384 1.364-0.996 1.748-1.748 0.436-0.856 0.436-1.976 0.436-4.216v-0.533c0-2.24 0-3.36-0.436-4.216-0.384-0.753-0.996-1.365-1.748-1.748-0.856-0.436-1.976-0.436-4.216-0.436h-11.2c-2.24 0-3.36 0-4.216 0.436-0.753 0.383-1.365 0.995-1.748 1.748-0.436 0.856-0.436 1.976-0.436 4.216v0.533c0 2.24 0 3.36 0.436 4.216 0.383 0.753 0.995 1.364 1.748 1.748 0.856 0.436 1.976 0.436 4.216 0.436z"></path>
    </svg>
  </div>
  <button class="autorization_submit ${theme}" type="submit">SIGN UP</button>
  </form>
  <div class="autorization_links">
  <a href="#" class="js_signup_link autorization_signup_link selected ${theme}">SIGN UP</a>
  <a href="#" class="js_signin_link autorization_signin_link ${theme}">SIGN IN</a>
  </div></div>`;
}
export function createMarcupSignIn(theme) {
  return `<div class="autorization-style ${theme}">
  <button class="autorization_close_btn">
  <svg viewBox="0 0 30 28" class="autorization_svg_close ${theme}" >
      <path fill="none" stroke="#111111" style="stroke: var(--color, #111111)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2" d="M24 8l-16 16M8 8l16 16"></path>
  </svg>
  </button>
    <form action="submit" class="js_form_autorization form-autorization-style selected  ${theme}">
        <input placeholder="NAME/EMAIL" type="text"/>
        <div class="autorization_svg_box">
        <input placeholder="PASSWORD" class="autorization_psw" type="text" />
        <svg viewBox="0 0 32 28" class="autorization_svg_psw ${theme}" >
        <path fill="none" stroke="#111111" style="stroke: var(--color, #111111)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M22.667 14.667v-4c0-3.682-2.985-6.667-6.667-6.667s-6.667 2.985-6.667 6.667v4M10.4 28h11.2c2.24 0 3.36 0 4.216-0.436 0.753-0.384 1.364-0.996 1.748-1.748 0.436-0.856 0.436-1.976 0.436-4.216v-0.533c0-2.24 0-3.36-0.436-4.216-0.384-0.753-0.996-1.365-1.748-1.748-0.856-0.436-1.976-0.436-4.216-0.436h-11.2c-2.24 0-3.36 0-4.216 0.436-0.753 0.383-1.365 0.995-1.748 1.748-0.436 0.856-0.436 1.976-0.436 4.216v0.533c0 2.24 0 3.36 0.436 4.216 0.383 0.753 0.995 1.364 1.748 1.748 0.856 0.436 1.976 0.436 4.216 0.436z"></path>
        </svg>
        </div>
        <button class="autorization_submit ${theme}" type="submit">SIGN IN</button>
      </form>
      <div class="autorization_links">
        <a href="#" class="js_signup_link autorization_signup_link ${theme}">SIGN UP</a>
        <a href="#" class="js_signin_link autorization_signin_link selected ${theme}">SIGN IN</a>
      </div></div>
      `;
}
