  $(document).ready(function() {
	initialize();
	
	$("#encode").click(function(e){
		codeAddress();
	}); 
  });
  
    
  var geocoder;
  var map;
  var marker;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(43.5562069, 7.013225);
    var myOptions = {
      zoom: 11,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	marker = new google.maps.Marker({
            map: map             
    });
  }

  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        
		marker.setPosition(results[0].geometry.location);
		
		// fill in the two text boxes
		$("#lat").val(results[0].geometry.location.lat());
		$("#lng").val(results[0].geometry.location.lng());
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

