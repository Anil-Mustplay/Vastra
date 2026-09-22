(() => {
  const params = new URLSearchParams(location.hash.replace(/^#/, ''));
  if (params.get('type') !== 'recovery') return;
  const U = 'https://trnzlkcdjjltphkknrqv.supabase.co';
  const K = 'sb_publishable_NaR11hPva6us_0wX2fNamA_PWJ_YFR8';
  const render = (message = '') => {
    document.body.innerHTML = `
      <main class="password-reset-page">
        <section class="password-reset-card">
          <p class="eyebrow">VASTRA CONTROL CENTRE</p>
          <h1>Set new password</h1>
          <p>Create a new password for your admin account.</p>
          <form id="passwordResetForm">
            <label>New password<input id="newPassword" type="password" minlength="8" required placeholder="Enter new password"></label>
            <label>Confirm password<input id="confirmPassword" type="password" minlength="8" required placeholder="Confirm new password"></label>
            <button class="btn btn-dark" type="submit">Update password</button>
            <p id="passwordResetMessage" class="password-reset-message">${message}</p>
          </form>
        </section>
      </main>
      <style>
        .password-reset-page{min-height:100vh;display:grid;place-items:center;background:#f7f1eb;padding:24px;font-family:Arial,sans-serif;color:#182033}
        .password-reset-card{width:min(440px,100%);background:#fff;border:1px solid #dfd3c5;border-radius:18px;padding:40px;box-shadow:0 18px 50px #431c2020}
        .password-reset-card h1{font-size:36px;margin:12px 0}.password-reset-card p{color:#697084;line-height:1.5}
        .password-reset-card label{display:block;margin:18px 0;font-weight:600}.password-reset-card input{display:block;width:100%;box-sizing:border-box;margin-top:8px;padding:14px;border:1px solid #d9dce4;border-radius:8px;font-size:16px}
        .password-reset-card button{width:100%;padding:15px;margin-top:8px}.password-reset-message{color:#7b1e32!important;min-height:22px}
      </style>`;
    document.querySelector('#passwordResetForm').onsubmit = async (event) => {
      event.preventDefault();
      const msg = document.querySelector('#passwordResetMessage');
      const password = document.querySelector('#newPassword').value;
      const confirm = document.querySelector('#confirmPassword').value;
      if (password !== confirm) { msg.textContent = 'Passwords do not match.'; return; }
      msg.textContent = 'Updating password…';
      const { error } = await window.passwordResetClient.auth.updateUser({ password });
      if (error) { msg.textContent = error.message; return; }
      msg.textContent = 'Password updated. Redirecting to admin login…';
      await window.passwordResetClient.auth.signOut();
      setTimeout(() => { location.href = '/admin.html?auth=password-reset'; }, 900);
    };
  };
  const start = async () => {
    if (!window.supabase) { render('Unable to load authentication. Please refresh and try again.'); return; }
    window.passwordResetClient = window.supabase.createClient(U, K);
    const { data, error } = await window.passwordResetClient.auth.getSession();
    render(error || !data.session ? 'This recovery link is invalid or expired. Request a new one.' : '');
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();