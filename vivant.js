/* Apparitions au défilement + barre WhatsApp sur téléphone */
(function () {
  var els = document.querySelectorAll(".revele");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("vu"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("vu"); }); }
  var barre = document.querySelector(".barre-mobile"), haut = document.querySelector(".haut-vivant");
  if (barre && haut && "IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { barre.classList.toggle("visible", !e[0].isIntersecting); }).observe(haut);
  }
})();
