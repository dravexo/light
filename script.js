(() => {
  const COOKIE_KEY = 'pb_cookie_consent';
  const banner = document.getElementById('cookieBanner');
  const accept = document.getElementById('cookieAccept');
  const reject = document.getElementById('cookieReject');

  const hideBanner = () => {
    if (banner) banner.remove();
  };

  try {
    if (localStorage.getItem(COOKIE_KEY)) hideBanner();
  } catch (_) {
    // Ignore storage restrictions.
  }

  const save = value => {
    try { localStorage.setItem(COOKIE_KEY, value); } catch (_) {}
    hideBanner();
  };

  accept?.addEventListener('click', () => save('accepted'));
  reject?.addEventListener('click', () => save('rejected'));
})();
