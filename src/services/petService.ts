import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pet } from "../model/Pet";

const PETS_KEY = "@clyvoday_pets";

export async function salvaPet(pet: Pet) {

  const pets = await buscaPet();

  pets.push(pet);

  await AsyncStorage.setItem(PETS_KEY, JSON.stringify(pets));
}

export async function buscaPet():Promise<Pet[]> {

  const data = await AsyncStorage.getItem(PETS_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export async function buscaPetPorTutor(tutorId: number) {

  const pets = await buscaPet();

  return pets.filter((pet) => Number(pet.tutorId) === Number(tutorId));
}