import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA6dL1mBFLSAoNRHlS3DU0fBQhOCi-v1AA",
  authDomain: "portofolio-94a33.firebaseapp.com",
  projectId: "portofolio-94a33",
  storageBucket: "portofolio-94a33.appspot.com",
  messagingSenderId: "524479696363",
  appId: "1:524479696363:web:dee8f55e1d811683ac1dae",
  measurementId: "G-SD8B339J1H"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
