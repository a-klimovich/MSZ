(function () {
  const timeout = 1500;

  document.addEventListener("load", () => {
    document.querySelector("body").style.overflow = "hidden";
  });

  window.addEventListener("load", (event) => {
    document.querySelector("#loader").classList.add("isLoaded");
    document.querySelector("body").style.overflow = "initial";

    setTimeout(() => {
      document.querySelector("#loader").remove();
    }, timeout * 1.5);
  });
})();
