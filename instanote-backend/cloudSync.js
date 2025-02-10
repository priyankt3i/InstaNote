const axios = require('axios');

function syncDataToCloud(data) {
  axios.post('https://your-cloud-api.com/sync', data)
    .then(response => {
      console.log('Data synced to cloud');
    })
    .catch(error => {
      console.error('Error syncing data to cloud:', error);
    });
}

module.exports = { syncDataToCloud };
