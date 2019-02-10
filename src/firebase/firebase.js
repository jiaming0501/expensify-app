import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDO0VfBWYnEPMOGmDeEGwU41wScVMe993w",
  authDomain: "expensify-bcc52.firebaseapp.com",
  databaseURL: "https://expensify-bcc52.firebaseio.com",
  projectId: "expensify-bcc52",
  storageBucket: "expensify-bcc52.appspot.com",
  messagingSenderId: "141307457450"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'ice cream',
//   note: "",
//   amount: 2.12,
//   createdAt: 4000
// });

// database.ref('notes').push({

// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error featching data ', error);
//   });

// database.ref().set({
//   name: 'Jiaming Zhao',
//   age: 24,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Amherst',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((error) => {
//   console.log('This failed. ', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed.');
// }).catch((error) => {
//   console.log('Data failed to remove. ', error);
// });
