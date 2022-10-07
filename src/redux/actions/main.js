import { types } from "../types/main";

export const setLanguaje = (languaje) => ({
  type: types.SET_LANGUAJE,
  languaje,
});

export const setTimePerQuestion = (time) => ({
  type: types.SET_TIME_PER_QUESTION,
  time,
});

export const setCurrentLanguaje = (lang) => ({
  type: types.SET_CURRENT_LANGUAJE,
  lang,
});

export const setQuestionList = (questions) => ({
  type: types.SET_QUESTION_LIST,
  questions,
});

export const setCurrentQuestion = (question) => ({
  type: types.SET_CURRENT_QUESTION,
  question,
});

export const setRemoveQuestion = (question) => ({
  type: types.SET_REMOVE_QUESTION,
  question,
});

export const setShowRecordModal = () => ({
  type: types.SET_SHOW_RECORD_MODAL,
});

export const setHideRecordModal = () => ({
  type: types.SET_HIDE_RECORD_MODAL,
});
