import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAPe2lmj_4Cc-5kbcKSaxBgMyhChVQ63OY",
  authDomain: "tedxdrewuniversitywebsite.firebaseapp.com",
  databaseURL: "https://tedxdrewuniversitywebsite.firebaseio.com",
  projectId: "tedxdrewuniversitywebsite",
  storageBucket: "tedxdrewuniversitywebsite.appspot.com",
  messagingSenderId: "141929285161",
  appId: "1:141929285161:web:581b6b0ace05e17e4bbe38",
  measurementId: "G-ZBBL3JLV99"
};

firebase.initializeApp(config);

export const auth = firebase.auth();