import './style.css';
import { extractImageSources, displayImages } from './extractImages';

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
    const imgSrcs = extractImageSources(html); // Extrae las fuentes de las imágenes del HTML.
    displayImages(imgSrcs, imagesContainer); // Muestra las imágenes en el contenedor.
  });
} else {
  console.error('Error al procesar el HTML');
}
