export default function mobileToggle() {
  const $ = window.$;
  $("body").toggleClass("mobile-nav-active");
  $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu");
  $("#mobile-body-overly").toggle();
}
