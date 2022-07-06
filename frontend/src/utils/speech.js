export const speech = (text) => {
  const syth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.pitch = 1.5;
  utterThis.rate = 0.8;
  syth.speak(utterThis);
};
