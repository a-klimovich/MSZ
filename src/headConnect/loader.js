(function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("loader"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "loader/animation.json",
  });

  $(document).ready(function() {
    setTimeout(() => {
      $('#loader').addClass('is-loaded');
    }, 1500);

    setTimeout(() => {
      animation.destroy();
    }, 2000)
  })
})();
