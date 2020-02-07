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

// basic variable to ref items in the firebase data base
var trainInfo = firebase.database();
// need an on click listener so when you add your info, it will be sent to the firebase data base
$("#button1").on("click", function () {

    trainInfo = $("#trainName").val().trim();
    destination = $("#destInfo").val().trim();
    // using info from Activity 21 to convert the time, and subtrack the start time
    firstTrainTime = moment($("#firstTime").val().trim(), "HH:mm").subtract(1, "years");
    frequency = $("frequencyInfo").val().trim();
    console.log(trainInfo);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
    // capture the info 
    newTrainInfo = {
        trainInfo: trainInfo,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    }
    // This is the code to push the data caputured to firebase 
    trainInfo.ref().push(newTrainInfo);

    $("#trainName").val("");
    $("#destInfo").val("");
    $("firstTime").val("");
    $("frequencyInfo").val("");

    return false;

})
// // grab the info from the data base -- use the info from activity 19 - add a child
// trainInfo.ref().on("child_added", function (childSnapshot) {

//     // Log everything that's coming out of snapshot
//     console.log(childSnapshot.val().trainInfo);
//     console.log(childSnapshot.val().destination);
//     console.log(childSnapshot.val().firstTrainTime);
//     console.log(childSnapshot.val().frequency);

// }