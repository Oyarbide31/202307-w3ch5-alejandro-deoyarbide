/* eslint-disable no-undef */
export abstract class Component {
  selector: string;
  template!: string;
  element!: Element;

  constructor(selector: string) {
    this.selector = selector;
  }

  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector) as HTMLDivElement;
    if (!element) return;

    this.element = element;
    this.element.insertAdjacentHTML(position, this.template);
  }
}
