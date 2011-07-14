x$('document').on('deviceready', function() {
  x$('#find_location').click(function(e) {
    var onSuccess = function(position) {
      x$('#location').html('Latitude: ' + position.coords.latitude +
                           '<br />' +
                           'Longitude: ' + position.coords.longitude);
    }

    navigator.geolocation.getCurrentPosition(onSuccess);
  });
});
