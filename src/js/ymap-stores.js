(function () {
  ymaps.ready(() => {
    const addressCards = $(".address-card");
    
    if (addressCards.length) {
      addressCards.each((idx, item) => {
        const center = $(item).attr("data-latlng")?.split(',');

        let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );

        let map = new ymaps.Map(`storMap${idx + 1}`, {
          center: center || [55.76, 37.64],
          zoom: 15
        });

        let myPlacemark = new ymaps.Placemark(
          map.getCenter(), null,
          {
            iconLayout: "default#image",
            iconImageHref: './assets/ymap-marker.png',
            iconImageSize: [40, 48],
            iconImageOffset: [-5, -38],
            iconContentLayout: MyIconContentLayout
          }
        )

        map.controls.remove('button');
        // map.controls.remove('fullscreenControl');
        map.controls.remove('geolocationControl');
        map.controls.remove('listBox');
        map.controls.remove('listBoxItem');
        map.controls.remove('manager');
        map.controls.remove('routeButton');
        map.controls.remove('routeEditor');
        map.controls.remove('routePanel');
        map.controls.remove('rulerControl');
        map.controls.remove('searchControl');
        map.controls.remove('storage');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        // map.controls.remove('zoomControl');
        map.geoObjects.add(myPlacemark);
      });
    }
  });
})();

