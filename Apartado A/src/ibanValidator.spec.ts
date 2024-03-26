import { isValidIBANStructure, extractIBANComponents } from './ibanValidator';

describe('IBAN Validation Tests', () => {
  describe('isValidIBANStructure', () => {
    it('should return true for a valid Spanish IBAN', () => {
      // Arrange
      const validIBAN = 'ES7620770024003102575766';
      // Act
      const result = isValidIBANStructure(validIBAN);
      // Assert
      expect(result).toBe(true);
    });

    it('should return false for an invalid IBAN structure', () => {
      // Arrange
      const invalidIBAN = 'ES762077002400310257576'; // Less numbers
      // Act
      const result = isValidIBANStructure(invalidIBAN);
      // Assert
      expect(result).toBe(false);
    });
  });

  describe('extractIBANComponents', () => {
    it('should correctly extract components from a valid Spanish IBAN', () => {
      // Arrange
      const validIBAN = 'ES7620770024003102575766';
      // Act
      const components = extractIBANComponents(validIBAN);
      // Assert
      expect(components).toEqual({
        isValid: true,
        controlDigits: '76',
        bankCode: '2077',
        branchCode: '0024',
        checkDigits: '00',
        accountNumber: '3102575766',
      });
    });

    it('should return null for an invalid IBAN structure', () => {
      // Arrange
      const invalidIBAN = 'ES762077002400310257576'; // Less numbers
      // Act
      const result = extractIBANComponents(invalidIBAN);
      // Assert
      expect(result).toBeNull();
    });
  });
});
