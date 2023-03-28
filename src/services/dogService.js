import axios from 'axios';

const apiEndpoint = 'https://dog.ceo/api';

const getDogBreeds = async () => {
  const result = await axios.get(`${apiEndpoint}/breeds/list/all`);
  return Object.keys(result.data.message);
};

const getRandomDogImage = async breed => {
  const result = await axios.get(
    `${apiEndpoint}/breed/${breed}/images/random`
  );
  return result.data.message;
};

export { getDogBreeds, getRandomDogImage };