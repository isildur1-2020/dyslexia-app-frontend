import { languajes } from "../languajes/languajes";

export const appState = {
  // MAIN STATE
  languaje: 0,
  navigate: () => {},
  // LOGIN
  username: "",
  password: "",
  showPassword: false,
  //FORM
  name: "",
  age: "",
  dateOfBirth: "",
  nationality: "",
  bloodType: "",
  gender: null,
  // CURRENT LANGUAJE
  currentLanguaje: languajes["english"],
  // AUTH
  isAdminAuth: true,
  isUserAuth: true,
  questions: [1, 2, 3, 4, 5, 6, 7],
  currentQuestion: null,
  // TIME PER QUESTION
  secondsPerQuestion: 240,
};
