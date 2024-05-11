import { deleteDoc, doc } from "firebase/firestore";

export async function useDeleteFromCollection(db, collectionName, rowId) {
    const docRef = doc(db, collectionName, rowId)
    await deleteDoc(docRef)
}