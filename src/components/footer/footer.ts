import { Component } from '../component';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.showTemplate();
    this.render();
  }

  showTemplate() {
    return `
      <footer>
    <img src="pikachu.png" sizes="50" alt="icono pikachu">
    <img src="instagram.png" sizes="50" alt="icono ig"/>
    <img src="pikachu.png" sizes="50" alt="icono pikachu">
  </footer>;

    `;
  }
}
