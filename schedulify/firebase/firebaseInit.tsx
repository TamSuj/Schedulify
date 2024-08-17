"use client"
import {getAuth} from "firebase/auth"
import {getApps, initializeApp} from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getPerformance } from "firebase/performance"


//we will have to put this in a .env file before publishing
const firebaseConfig = {
    apiKey: "AIzaSyBlYZkuUbr27svJNUOiToqj3lB2e3LzHmQ",
    authDomain: "schedulify-1a08e.firebaseapp.com",
    projectId: "schedulify-1a08e",
    storageBucket: "schedulify-1a08e.appspot.com",
    messagingSenderId: "696293109939",
    appId: "1:696293109939:web:0c1b6a7561bff98f6dc0c6",
    measurementId: "G-75LV4LBV9N"
  };

const initMyFirebase = () =>{

    if(!getApps().length)
    {
        const app = initializeApp(firebaseConfig);

        const auth = getAuth(app);


        if(typeof window !== "undefined")
        {
            if("measurementId" in firebaseConfig)
            {
                const analytics = getAnalytics(app);
                const performance = getPerformance(app);
            }
        }
        console.log("Initialized firebase");
    }
    else{
        console.log("Already Initialized firebase");
    }
   
}

export default initMyFirebase