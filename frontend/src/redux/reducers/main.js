import { types } from "../types/main";

const initialState = {
  languaje: "english",
  timePerQuestion: 60,
  currentLanguaje: {},
  isAuth: false,
  questions: [1, 2, 3, 4, 5, 6, 7],
  currentQuestion: 1,
  showRecordModal: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LANGUAJE:
      return {
        ...state,
        languaje: action.languaje,
      };
    case types.SET_TIME_PER_QUESTION:
      return {
        ...state,
        timePerQuestion: action.time,
      };
    case types.SET_CURRENT_LANGUAJE:
      return {
        ...state,
        currentLanguaje: action.lang,
      };
    case types.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case types.SET_QUESTION_LIST:
      return {
        ...state,
        questions: action.questions,
      };
    case types.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.question,
      };
    case types.SET_REMOVE_QUESTION:
      const question = Number(action.question);
      const newQuestions = state.questions.filter((q) => q !== question);
      return {
        ...state,
        questions: newQuestions,
      };
    case types.SET_SHOW_RECORD_MODAL:
      return {
        ...state,
        showRecordModal: true,
      };
    case types.SET_HIDE_RECORD_MODAL:
      return {
        ...state,
        showRecordModal: false,
      };
    default:
      return state;
  }
};
