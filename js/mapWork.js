
const Task = {};
Task.data =[
           {
           lat: 28.412839,
           lng: 77.041664
           },
           {
           lat: 28.421507,
           lng: 77.039018
           },
           {
           lat: 28.427017,
           lng: 77.037505
           },
           {
           lat: 28.429536,
           lng: 77.040552
           },
           {
           lat: 28.432287,
           lng: 77.046930
           },
           {
           lat: 28.437011,
           lng: 77.045957
           },
           {
           lat: 28.442948,
           lng: 77.038161
           },
           {
           lat: 28.448240,
           lng: 77.038023
           },
           {
           lat: 28.453622,
           lng: 77.043232
           },
           {
           lat: 28.463078,
           lng: 77.052115
           },
           {
           lat: 28.489606,
           lng: 77.080004
           },
           {
           lat: 28.498286,
           lng: 77.088410
           },
           {
           lat: 28.503162,
           lng: 77.088471
           },
           {
           lat: 28.506467,
           lng: 77.083922
           },
           {
           lat: 28.509734,
           lng: 77.079330
           }
           ]


function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: Task.data[7],
      mapTypeId: 'roadmap'
    });

    const cabSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        strokeOpacity: 1,
        scale: 3,
        strokeColor: '#ff0000'
    };

    const cabPath = new google.maps.Polyline({
      path: Task.data,
      geodesic: true,
      strokeColor: '#40e0d0',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      icons: [{
            icon: cabSymbol,
            offset: '100%'
       }],
    });

    cabPath.setMap(map);
    setMarkers(map);
    moveCab(cabPath);
}

function setMarkers(map){
    const locations = Task.data;

    for (i = 0; i < locations.length; i++) {
    let cityCircle = new google.maps.Circle({
          strokeColor: '#40e0d0',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#FFFFFF',
          fillOpacity: 1,
          map: map,
          center: locations[i],
          radius: 100
        });

    }
}

function moveCab(cabPath){
    let count = 0,
        icons = cabPath.get('icons');

    var listener = window.setInterval(function() {
        count = (count + 1) % 200;
        icons[0].offset = (count / 2) + '%';
        cabPath.set('icons', icons);
        },
        100);
}

