import {
  ApiPokemonsRepository,
  Repository,
} from '../../data/api_repository.ts';

import { Pokemon } from '../../models/pokemon.ts';
import { Component } from '../component.ts';

export class Card extends Component {
  pokemonUrl: String;
  pokemon!: Pokemon;
  repo: Repository<Pokemon>;

  constructor(selector: string, poemonUrl: string) {
    super(selector);
    this.pokemonUrl = pokemonUrl;
    this.repo = new ApiPokemonsRepository(this.pokemonUrl);
    this.managemComponent();
  }

  createTemplate() {
    return `
    
    `;
  }
}
