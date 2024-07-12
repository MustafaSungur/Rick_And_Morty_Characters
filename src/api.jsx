import axios from "axios";

export const fetchAllCharacters = async () => {
  let allCharacters = [];
  let page = 1;
  while (allCharacters.length < 250) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = response.data;
    allCharacters = [...allCharacters, ...data.results];
    page += 1;
  }
  return allCharacters.slice(0, 250);
};
