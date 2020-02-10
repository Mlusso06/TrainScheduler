// Link to Fire base
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7_Gga8fVbL8XybnjiH5MegsfjPf2AiXA",
    authDomain: "trainschd2.firebaseapp.com",
    databaseURL: "https://trainschd2.firebaseio.com",
    projectId: "trainschd2",
    storageBucket: "trainschd2.appspot.com",
    messagingSenderId: "350192476547",
    appId: "1:350192476547:web:4ee9267a57ded7f23a56b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// basic variable to ref items in the firebase data base
var database = firebase.database();
// need an on click listener so when you add your info, it will be sent to the firebase data base
$("#button1").on("click", function (event) {
    event.preventDefault()
    // looking at activity 17 from Firebase week - employee time sheet
    var trainNm = $("#train-name-input").val().trim();
    var destination = $("#destInfo").val().trim();
    var firstTrainTime = $("#firstTime").val().trim();
    var frequency = $("#frequencyInfo").val().trim();

    console.log(trainNm);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
    // capture the info and create "temp" objects for holding the Train info
    // var newTrainInfo = {
    //     trainNm: trainNm,
    //     destination: destination,
    //     firstTrainTime: firstTrainTime,
    //     frequency: frequency
    // };
    // This is the code to push the data caputured to firebase 
    database.ref().push({
        trainNm: trainNm,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,

    });



    console.log(database.trainNm);
    console.log(database.destination);
    console.log(database.firstTrainTime);
    console.log(database.frequency);

    // this will now clear all the text-boxes
    $("#train-name-input").val("");
    $("#destInfo").val("");
    $("#firstTime").val("");
    $("#frequencyInfo").val("");



})
// // grab the info from the data base -- use the info from activity 19 - add a child
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainNm = childSnapshot.val().trainNm;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;
    var remainingTm = moment().diff(moment.unix(firstTrainTime), "minutes")%frequency;
    var minutes = frequency - remainingTm;
    var arrTime = moment().add(minutes, "m").format("HH:mm");


    var newRow = $("<tr>").append(
        $("<td>").text(trainNm),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(arrTime),
        $("<td>").text(minutes)
      );
    
      // Append the new row to the table
      $("#trainData > tbody").append(newRow);




});

//     // Log everything that's coming out of snapshot
//     console.log(childSnapshot.val().trainInfo);
//     console.log(childSnapshot.val().destination);
//     console.log(childSnapshot.val().firstTrainTime);
//     console.log(childSnapshot.val().frequency);

// }