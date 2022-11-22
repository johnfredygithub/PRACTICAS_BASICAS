import { POKEMON_TYPE_COLORS } from "./constants";

const getColorBypokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorBypokemonType;
