export type Pokemon = {
  id: number;
  name: string;
  drawPokemon: string;
};

export type ResultApi = {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
};
