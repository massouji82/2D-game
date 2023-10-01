import { BestTime } from '@/typings/types';
import { db } from '../../firebase.config';
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { sortTimes } from './sortTimes';

const NUM_OF_BEST_TIMES = 10;
const BEST_TIMES = 'bestTimes';
const DEFAULT_TIME = 1000;

export const checkBestTimes = async (time: number): Promise<void> => {
  const bestTimes: Array<BestTime> = await getDocs(collection(db, BEST_TIMES))
    .then((querySnapshot) => {
      return querySnapshot.docs.map(
        doc => ({ id: doc.id, ...doc.data() } as unknown as BestTime));
    });

  sortTimes(bestTimes);
  const worstBestTime = bestTimes[NUM_OF_BEST_TIMES - 1]?.time ?? DEFAULT_TIME;

  if (time < worstBestTime) {
    let name;
    while (!name) {
      name = prompt("Wow! You're fast! Please enter your name:") ?? 'Anonymous';
    };

    const newTime = { time, name };

    bestTimes.push(newTime);
    sortTimes(bestTimes);

    if (bestTimes.length > NUM_OF_BEST_TIMES) {
      bestTimes.splice(10);
    }

    await _saveBestTimes(time, bestTimes);
    getBestTimes();
  }
};

export const getBestTimes = async (): Promise<BestTime[]> => {
  return await getDocs(collection(db, BEST_TIMES))
    .then((querySnapshot) => {
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BestTime));
    });
};

const _saveBestTimes = async (time: number, bestTimes: Array<BestTime>): Promise<void> => {
  const promises = bestTimes.map(async (bestTime: BestTime) => {
    const { id, ...data } = bestTime;

    try {
      if (id) {
        await setDoc(doc(db, BEST_TIMES, id), data);
      } else {
        const newDocRef = await addDoc(collection(db, BEST_TIMES), data);
        bestTime.id = newDocRef.id;
        await setDoc(doc(db, BEST_TIMES, bestTime.id), bestTime);
      }
    } catch (error) {
      console.error('Error updating best time:', error);
      alert("There was a problem reaching the database :(");

      return;
    }

    const allDocs = await getDocs(collection(db, BEST_TIMES));

    allDocs.docs.forEach(doc => {
      if (!bestTimes.some(bestTime => bestTime.id === doc.id)) {
        deleteDoc(doc.ref);
      }
    });
  });

  await Promise.all(promises);
};
