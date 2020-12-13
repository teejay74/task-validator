/* eslint-disable no-param-reassign */
import checkBankSystem from './checkBankSystem';
import validation from './validation';

export default class CardWidget {
  constructor(widget) {
    this.widget = widget;
    this.input = null;
    this.bankImg = null;
  }

  init() {
    this.bankImg = document.getElementsByClassName('card');
    this.input = document.getElementById('validate_input');
    const form = document.getElementById('validate_form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.validate(this.input.value);
    });
    this.input.addEventListener('keydown', () => {
      if (this.input.classList.contains('valid') || this.input.classList.contains('invalid')) {
        this.input.className = '';
      }
      this.imgHide();
      const imageCard = document.querySelector(`[bank-id="${checkBankSystem(this.input.value)}"]`);
      if (imageCard) {
        imageCard.style.opacity = 1;
      }
    });
  }

  imgHide() {
    this.bankImg.forEach((el) => {
      el.style.opacity = 0.5;
    });
  }

  validate(number) {
    if (number !== '' && validation(number)) {
      this.input.classList.add('valid');
    } else {
      this.input.classList.add('invalid');
    }
  }
}
