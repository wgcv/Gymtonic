import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AAAA5xkBimw:APA91bHHb8E3xxqneGWq20xkRg4hUv3XDbk19A5sBEfavXPrE5Ox03HW7wNgwFclDchSRg95F4s5DrPAm0tGconrNtAt58vG1dNbI5BNU3XDqm6d-H4VAHoFpxyD14LDsTw3TWT5IeSY",
  authDomain: "https://gymtonic-cfe19.firebaseapp.com",
  databaseURL: "https://gymtonic-cfe19.firebaseio.com",
  storageBucket: "gs://gymtonic-cfe19.appspot.com",
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp
//module.exports.firebaseApp = firebaseApp; //this doesnt have to be database only
