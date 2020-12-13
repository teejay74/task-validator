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
    this.widget.innerHTML = `
      <form id='validate_form'>
        <div class='card-box'>
          <div class='card' bank-id='visa'><img src='../src/img/visa.png' alt='visa'></div>
          <div class='card' bank-id='mastercard'><img src='../src/img/mastercard.png' alt='mastercard'></div>
          <div class='card' bank-id='american-express'><img src='../src/img/american-express.png' alt='american express'></div>
          <div class='card' bank-id='jcb'><img src='../src/img/jcb.png' alt='jcb'></div>
          <div class='card' bank-id='discover'><img src='../src/img/discover.png' alt='discover'></div>
          <div class='card' bank-id='diners-club'><img src='../src/img/dinersclub.png' alt='diners club'></div>
          <div class='card' bank-id='mir'><img src='../src/img/mir.png' alt='mir'></div>
        </div>
        <div class='input-box'>
          <input id='validate_input' type='text'>
          <button id='validate_button'>Click to Validate</button>
        </div>
     </form>`;
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
