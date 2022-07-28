//Reset scroll top

history.scrollRestoration = "manual";

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    behavior: "smooth";
  };
}
