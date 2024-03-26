export function extractImageLinks(html: string, container: HTMLElement): void {
  const matches: RegExpMatchArray | null = html.match(
    /<img\s+[^>]*?src="([^"]*?)"[^>]*?>/g
  );

  container.innerHTML = '';

  if (matches) {
    matches.forEach((imgTag: string) => {
      const srcMatch: RegExpExecArray | null = /src="([^"]*?)"/.exec(imgTag);
      if (srcMatch && srcMatch[1]) {
        const imgSrc: string = srcMatch[1];
        const imgElement: HTMLImageElement = document.createElement('img');
        imgElement.src = imgSrc;
        container.appendChild(imgElement);
      }
    });
  }
}
