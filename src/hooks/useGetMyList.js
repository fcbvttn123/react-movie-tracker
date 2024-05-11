import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "../config/firebase-config";

export async function useGetMyList(email) {
    let myList = []
    const q = query(collection(firestoreDb, "myList"), where("email", "==", email))
    const querySnapShot = await getDocs(q)
    querySnapShot.forEach(doc => {
        myList.push({
            rowId: doc.id, 
            ...doc.data()
        })
    })
    return myList
}