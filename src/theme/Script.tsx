export default function Script() {
  const script = `(function () {
  var persistedPreferMode = window.localStorage.getItem('theme-mode');
  var hasPersistedPreference = typeof persistedPreferMode === 'string' && ['light', 'dark'].includes(persistedPreferMode);
  if (hasPersistedPreference) {
    document.body.dataset.theme = persistedPreferMode;
    return;
  }
  var mql = window.matchMedia('(prefers-color-scheme: dark)');
  var hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    document.body.dataset.theme = 'system';
    window.localStorage.setItem('theme-mode', 'system');
    return;
  }
  document.body.dataset.theme = 'system';
  window.localStorage.setItem('theme-mode', 'system');
})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
