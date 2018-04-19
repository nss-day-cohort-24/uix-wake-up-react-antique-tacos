import { googleProvider, rebase }  from './base.js';

export function auth (email, pw) {
  return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
    .then((data) => {
      console.log("data is", data);
      saveUser(data);
    })
}

export function logout () {
  return rebase.initializedApp.auth().signOut()
}


export function loginWithGoogle () {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    console.log('user data', data);
    saveUser(data.user);
  });
}

export function saveZip(uid, zip) {
  console.log("save zip", zip);
  return rebase.initializedApp.database().ref().child(`users/${uid}`)
    .update({
      zip: zip
    })
    .then(() => {
      return uid;
    });
}

export function saveUser (user) {
  console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
    .set({
      email: user.email,
      uid: user.uid,
      zip: 37206
    })
    .then(() => {
      return user;
    })
}
