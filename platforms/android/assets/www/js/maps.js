  //></script
/*$('#map').height($(window).height() - (50 + $('[data-role=header]').height() - $('[data-role=footer]').height()));
initialize('map',posicionActual);

setTimeout(function() {
       google.maps.event.trigger(map,'resize');
      dropMarkers();
       var markerCluster = new MarkerClusterer(map, markers);
      map.fitBounds(bounds);}, 200);
*/


        var divMapa = document.querySelector('#map');
        navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
        function fn_mal(){}
        function fn_ok(rta){
            var lat = rta.coords.latitude;
            var lon = rta.coords.longitude;
            
            var gLatLon = new google.maps.LatLng(lat, lon);
            var objConfig = {
                zoom: 15,
                center: gLatLon
            }
            
            var gMapa = new google.maps.Map( divMapa, objConfig);
            
            
            var objConfigMarker = {
                position: gLatLon,
                map: gMapa,
                title: "Juan"
            }
            var gMarker = new google.maps.Marker(objConfigMarker);
                google.maps.event.addListener(gMarker, 'click',function(){
                    gIW.open(gMapa, gMarker);
                })
                
                
            var objHtml = {
                content: '<p> JUAN </p>'
            }
            var gIW = new google.maps.InfoWindow (objHtml);
            
            //2º Marker
            var lat2 = '42.21';
            var lon2 = '-8.77';
            
            var gLatLon2 = new google.maps.LatLng(lat2, lon2);
            
            var objConfigMarker2 = {
                position: gLatLon2,
                map: gMapa,
                title: "Otro"
            } 
            var gMarker2 = new google.maps.Marker(objConfigMarker2);
             
        }