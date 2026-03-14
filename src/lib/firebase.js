import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, logEvent as firebaseLogEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAtoxg4QRtD_qyliMTr8cK5yQ3c6HN0M7U',
  authDomain: 'hospitality-fa571.firebaseapp.com',
  projectId: 'hospitality-fa571',
  storageBucket: 'hospitality-fa571.firebasestorage.app',
  messagingSenderId: '228061868447',
  appId: '1:228061868447:web:bd7ea8af83d6d685a88daa',
  measurementId: 'G-8S94GN76SB',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let analytics = null;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (e) {
  console.warn('Firebase Analytics not available', e);
}

export { analytics };

export function logEvent(eventName, params = {}) {
  if (analytics && typeof window !== 'undefined') {
    try {
      firebaseLogEvent(analytics, eventName, params);
    } catch (err) {
      console.warn('Analytics logEvent failed', err);
    }
  }
}
