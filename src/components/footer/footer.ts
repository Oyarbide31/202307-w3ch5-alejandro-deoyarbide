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
    <img src="pikachu.png" id="img_footer" alt="icono pikachu">
   <img src="pikachu.png" id="img_footer" alt="icono pikachu">
    <img src="pikachu.png" id="img_footer" alt="icono pikachu">
  </footer>;

    `;
  }
}
