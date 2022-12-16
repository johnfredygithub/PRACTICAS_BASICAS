import { API_HOST } from "../utils/constants";


export async function getPokemonApi(endpointUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url || endpointUrl);
    const result = await response.json(); 
    return result;
    
  } catch (err) {
    throw err;
  }
}


export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json(); 
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json(); 
    return result;
  } catch (error) {
    throw error;
  }
}
