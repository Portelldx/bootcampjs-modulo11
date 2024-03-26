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
  console.error('Error al procesar el html');
}
