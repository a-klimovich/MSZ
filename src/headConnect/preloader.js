(function () {
  const timeout = 1700;

  document.addEventListener("load", () => {
    document.querySelector("body").style.overflow = "hidden";
  });

  window.addEventListener("load", (event) => {
    setTimeout(() => {
      document.querySelector("#loader").classList.add("isLoaded");
      document.querySelector("body").style.overflow = "initial";
    }, timeout);
    setTimeout(() => {
      document.querySelector("#loader").remove();
    }, timeout * 1.5);
  });
})();
