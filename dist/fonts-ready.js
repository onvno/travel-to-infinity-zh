// A separate file, not inline, so the Content-Security-Policy in _headers can stay strict.
// Mark the page once the title's typeface is ready (or after 1.2 s at most), so the opening can fade in at once.
(function () {
  var done = function () { document.documentElement.classList.add('fonts'); };
  if (document.fonts && document.fonts.load) document.fonts.load('500 80px Archivo').then(done, done); else done();
  setTimeout(done, 1200);
})();
