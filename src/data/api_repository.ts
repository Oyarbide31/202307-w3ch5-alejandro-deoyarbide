import { Pokemon } from '../components/models/pokemons';

export interface Repository<T extends { id: number | string }> {
  get(_id: T['id']): Promise<T>;
  getAll(): Promise<T[]>;
  create(_item: Omit<T, 'id'>): Promise<T>;
  update(_id: T['id'], _item: Partial<T>): Promise<T>;
  delete(_id: T['id']): Promise<void>;
}

export class ApiPokemonsRepository implements Repository<Pokemon> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Pokemon[]> {
    const response = await fetch(this.urlBase);
    const data = await response.json();
    return data;
  }

  async get(id: number): Promise<Pokemon> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async create(item: Omit<Pokemon, 'id'>): Promise<Pokemon> {
    const response = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

  async update(id: number, item: Partial<Pokemon>): Promise<Pokemon> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

  async delete(id: number): Promise<void> {
    const url = this.urlBase + '/' + id;
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
