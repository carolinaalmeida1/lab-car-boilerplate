var submit = document.querySelectorAll(".labcar-section4-location-btn-txt");
submit.addEventListener("click", calcRoute);

function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var initialLocation = {lat: -23.557445, lng: -46.662063};
  var mapDesk = new google.maps.Map(
    document.getElementById("googleMapDesktop"), {zoom: 12, center: initialLocation}
  );
  var mapMob = new google.maps.Map(
    document.getElementById("googleMapMobile"), {zoom: 12, center: initialLocation}
  );
  var markerDesk = new google.maps.Marker({position: initialLocation, map: mapDesk});
  var markerMob = new google.maps.Marker({position: initialLocation, map: mapMob});
  directionsDisplay.setMap(mapDesk);
};