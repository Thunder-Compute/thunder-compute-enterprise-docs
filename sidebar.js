/* Sidebar: the Kubernetes section under Installation stays open at all times.
   Its title carries Mintlify's collapse toggle as well as the link to its root
   page, so a click on it would unmount both child links with no chevron left to
   restore them (style.css hides the chevron).

   Intercept the click before React sees it and forward it to the Basic setup
   link instead. Navigation still happens client-side, and the section never
   collapses. */
(function () {
  var GROUP = 'li[data-group-tag][data-title="Kubernetes"]';
  var ROOT_PAGE = '/kubernetes';

  document.addEventListener(
    'click',
    function (event) {
      var button = event.target.closest && event.target.closest('button');
      if (!button) return;

      var group = button.parentElement;
      if (!group || !group.matches || !group.matches(GROUP)) return;
      if (button !== group.querySelector(':scope > button')) return;

      event.preventDefault();
      event.stopPropagation();

      if (window.location.pathname === ROOT_PAGE) return;

      var link = group.querySelector('ul a[href="' + ROOT_PAGE + '"]');
      if (link) {
        link.click();
      } else {
        window.location.href = ROOT_PAGE;
      }
    },
    true
  );
})();
