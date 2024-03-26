import './style.css';
import { validateIBAN } from './ibanValidator';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', validateIBAN);
  }
});
