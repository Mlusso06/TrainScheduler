// Link to Fire base
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBvsAJHI7I8JojrFAyRkvFZcaKKKHU5Ab0",
    authDomain: "trainscheduler-ae4cf.firebaseapp.com",
    databaseURL: "https://trainscheduler-ae4cf.firebaseio.com",
    projectId: "trainscheduler-ae4cf",
    storageBucket: "trainscheduler-ae4cf.appspot.com",
    messagingSenderId: "278830555255",
    appId: "1:278830555255:web:1f8b54db2bb47efaade672"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// * Make sure that your app suits this basic spec:
  
//   * When adding trains, administrators should be able to submit the following:
    
//     * Train Name
    
//     * Destination 
    
//     * First Train Time -- in military time
    
//     * Frequency -- in minutes
  
//   * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
//   * Users from many different machines must be able to view same train times.
  
//   * Styling and theme are completely up to you. Get Creative!