import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
import { theMeal_BaseUrl } from "./apiLink";
import axios from "axios";

// Saving new Item
export const saveItem = async (data:{}) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  try {
    const responce = await axios.get(theMeal_BaseUrl+`/list.php?c=list`)
    
  } catch (error) {
    console.log(error)
  }

  return items.docs.map((doc) => doc.data());
};
