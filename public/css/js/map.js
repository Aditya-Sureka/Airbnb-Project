mapboxgl.accessToken = mapToken;

// const Coordinates = [75.7138884, 19.7514798];

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 10, // starting zoom
});

console.log(coordinates);
// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${Location}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);
