const fetchQueenslandData = async () => {
  try {
    const response = await fetch('https://services1.arcgis.com/vkTwD8kHw2woKBqV/arcgis/rest/services/ESCAD_Current_Incidents_Public/FeatureServer/0/query?f=geojson&where=1%3D1&outFields=*');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    console.log(result);
   // setData(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchQueenslandData