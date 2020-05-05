// Initialize and add the map
function initMap() {
    // The location of home
    var home = {lat: 17.3850, lng: 78.4867};
    // The map, centered at home
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: home});
    // The marker, positioned at home
    var marker = new google.maps.Marker({position: home, map: map});
  }