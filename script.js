var map;
var service;
var infowindow;

function initMap() {
  var pyrmont = new google.maps.LatLng(19.063741, 72.831356);

  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.063741, lng: 72.831356},
		zoom: 13
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}