import { describe, it, expect } from 'vitest';
import { extractImageSources } from './extractImages';

describe('extractImageSources', () => {
  it('should extract all image sources from given HTML string', () => {
    // Arrange
    const testHTML = `
            <div>
                <img src="http://example.com/image1.jpg" alt="Test Image 1">
                <img src="http://example.com/image2.jpg" alt="Test Image 2">
                <p>Some text here</p>
                <img src="http://example.com/image3.png" alt="Test Image 3">
            </div>
        `;

    // Act
    const extractedSources = extractImageSources(testHTML);

    // Assert
    expect(extractedSources).toEqual([
      'http://example.com/image1.jpg',
      'http://example.com/image2.jpg',
      'http://example.com/image3.png',
    ]);
  });

  it('should return an empty array if no images are present', () => {
    // Arrange
    const testHTML = '<div><p>No images here</p></div>';

    // Act
    const extractedSources = extractImageSources(testHTML);

    // Assert
    expect(extractedSources).toEqual([]);
  });
});
