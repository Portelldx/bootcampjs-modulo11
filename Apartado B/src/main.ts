import './style.css';
import './style.css';
import { extractImageLinks } from './extractImages';

const extractButton = document.getElementById('extractButton');
const htmlInput = document.getElementById('htmlInput');
const imagesContainer = document.getElementById('imagesContainer');

if (
  extractButton instanceof HTMLButtonElement &&
  htmlInput instanceof HTMLTextAreaElement &&
  imagesContainer instanceof HTMLElement
) {
  extractButton.addEventListener('click', () => {
    const html = htmlInput.value;
    extractImageLinks(html, imagesContainer);
  });
} else {
  console.error('Algún elemento no se encontró o no es del tipo esperado.');
}
