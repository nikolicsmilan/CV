import { db } from "../firebase";
import {
  query,
  doc,
  updateDoc,
  collection,
  onSnapshot,
  increment,
} from "firebase/firestore";

export const myOnSnapshotVisited = (setVisit) => {
  const q = query(collection(db, "visit"));
  return onSnapshot(q, (querySnapshot) => {
    let count = 0; // Initialize count as 0
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      count = doc.data().count; // Assuming count is a property in the document
    }
    setVisit(count); // Update the count value
  });
};

export const myOnSnapShotUpdateVisit = async () => {
  const visitDocRef = doc(db, "visit", "count");
  await updateDoc(visitDocRef, { count: increment(1) });
  // Replace "your-doc-id" with the actual document ID in the "visit" collection
};
