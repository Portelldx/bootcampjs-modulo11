export function extractImageSources(html: string): string[] {
  const matches: RegExpMatchArray | null = html.match(
    /<img\s+[^>]*?src="([^"]*?)"[^>]*?>/g
  );
  const imgSrcs: string[] = [];

  if (matches) {
    matches.forEach((imgTag: string) => {
      const srcMatch: RegExpExecArray | null = /src="([^"]*?)"/.exec(imgTag);
      if (srcMatch && srcMatch[1]) {
        imgSrcs.push(srcMatch[1]);
      }
    });
  }

  return imgSrcs;
}

export function displayImages(imgSrcs: string[], container: HTMLElement): void {
  container.innerHTML = '';
  imgSrcs.forEach((src: string) => {
    const imgElement: HTMLImageElement = document.createElement('img');
    imgElement.src = src;
    container.appendChild(imgElement);
  });
}
