const requestURL =
  'https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/28?f=pjson';
const data = document.querySelector('#data');

fetch(requestURL)
  .then(function (res) {
    return requestURL.json();
  })
  .then(function (jsonObject) {
    const floodZones = jsonObject['uniqueValueInfos'];
    floodZones.forEach(displayFloodZone);
  });

function displayFloodZone(floodZoneData) {
  let floodZone = document.createElement('div');
  floodZone.innerHTML = `Flood Zone: ${floodZoneData.label} `;
}
