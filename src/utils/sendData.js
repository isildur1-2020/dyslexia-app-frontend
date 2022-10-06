export const convertURLToBlob = async (URL) => {
  let blob = null;
  try {
    const data = await fetch(URL);
    blob = await data.blob();
  } catch (error) {
    console.log(error);
  } finally {
    return blob;
  }
};
