import { Component } from '../component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.showTemplate();
    this.render();
  }

  showTemplate() {
    return `
    <header class="header"> 
    <img src="pokemon-logo.svg" id="img_pokemon" alt="titulo de pokemon" /> 
    <h1> Accede a tu PokeApi</h1>

<nav>
  <ul>
    <li>Mundo Pokemon</li>
    <li>Detalle de cada pokemon</li>
    <li>Tus pokemon capturados</li>
  </ul>
</nav>
    </header>`;
  }
}
