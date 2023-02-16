const latitude = 25.772;
const longitude = -80.18859;
const requestURL =
  'https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/28';
const queryParams = {
  geometry: `${longitude},${latitude}`,
  geometryType: 'esriGeometryPoint',
  spatialRel: 'esriSpatialRelIntersects',
  inSR: 4326,
  outFields: 'FLD_ZONE',
  returnGeometry: false,
  f: 'json',
};

fetch(`${requestURL}/query?${new URLSearchParams(queryParams)} `)
  .then((response) => response.json())
  .then((floodData) => {
    let data = floodData.features[0].attributes;
    console.log(data);
  })
  .catch((error) => console.log(error));
