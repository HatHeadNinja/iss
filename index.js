// REQUIREMENTS
// ============
// Via API calls:
// 1. Get the IP this program is running on
// 2. Pass the IP to get the geo coordinates (longitude/latitude)
// 3. Use the geo coordinates to get when the ISS flies over
// 
// ============

// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

