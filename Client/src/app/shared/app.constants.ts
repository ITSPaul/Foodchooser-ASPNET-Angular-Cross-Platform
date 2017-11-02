export let CONFIGURATION = {
  baseUrls: {
    server: 'http://localhost:64942/',
    // server: 'https://foodchooser.azurewebsites.net/',
    apiUrl: 'api/',
    foodImageFolder: 'foodimages/'
  },
  authConfig: {
    CLIENT_ID: 'AngularFoodClient',
    GRANT_TYPE: 'password',
    SCOPE: 'WebAPI'
  }
};