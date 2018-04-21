import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key,snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').push({
//   description: 'this is the description',
//   note:'note',
//   amount:23,
//   createdAt:0
// });

// database.ref('expenses').once('value')
//   .then( snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// const onExpensesChange = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach(child => {
//     expenses.push({
//       id:child.key,
//       ...child.val()
//     });
//   });
//   console.log(expenses);
// };
//
// database.ref('expenses').on('value', onExpensesChange, e => console.log(e));
//

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });// database.ref('notes').set(notes);

// database.ref().set({
//   name:'Renzo Calla',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title:'Software Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This failed.',e);
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('was removed');
// }).catch(e => {
//   console.log("wasn't removed",e);
// });

// database.ref('isSingle').set(null);

//
// database.ref().update({
//   stressLevel:9,
//   'job/company': 'amazon',
//   'location/city': 'Seatle'
// });

//gets the data a single time
// database.ref('location/city').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error ',e);
//   });
// const onValueChange = snapshot => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// };
// database.ref().on('value', onValueChange, e => console.log(e)); //listening the socket
//
// setTimeout(() => {
//   database.ref('name').set('juanito');
// },4000);
//
// setTimeout(() => {
//   database.ref('job/title').set('qa');
// }, 6000);
