import { isValidIBAN } from 'ibantools';

const bankCodes: { [key: string]: string } = {
  '2080': 'Abanca Corporación Bancaria',
  '0061': 'Banca March',
  '0188': 'Banco Alcalá',
  '0182': 'Banco Bilbao Vizcaya Argentaria',
  '0130': 'Banco Caixa Geral',
  '0234': 'Banco Caminos',
  '2105': 'Banco Castilla-La Mancha',
  '0240': 'Banco de Crédito Social Cooperativo',
  '0081': 'Banco de Sabadell',
  '0487': 'Banco Mare Nostrum',
  '0186': 'Banco Mediolanum',
  '0238': 'Banco Pastor',
  '0075': 'Banco Popular Español',
  '0049': 'Banco Santander',
  '3873': 'Banco Santander Totta',
  '2038': 'Bankia',
  '0128': 'Bankinter',
  '0138': 'Bankoa',
  '0152': 'Barclays Bank PLC',
  '3842': 'BNP Paribas Paris',
  '3025': 'Caixa de Credit dels Enginyers',
  '2100': 'Caixabank',
  '2045': 'Caja de Ahorros y Monte de Piedad de Ontinyent',
  '3035': 'Caja Laboral Popular CC',
  '3081': 'Caja Rural Castilla-La Mancha',
  '3058': 'Cajamar Caja Rural',
  '2000': 'Cecabank',
  '1474': 'Citibank Europe PLC',
  '3821': 'Commerzbank AG',
  '3877': 'Danske Bank A/S',
  '0019': 'Deutsche Bank SAE',
  '0239': 'EVO Banco',
  '2085': 'Ibercaja Banco',
  '1465': 'ING Bank NV',
  '2095': 'Kutxabank',
  '2048': 'Liberbank',
  '0131': 'Novo Banco',
  '0073': 'Open Bank',
  '0108': 'Société Générale',
  '2103': 'Unicaja Banco',
};

export function isValidIBANStructure(iban: string): boolean {
  const ibanRegex = /^ES(\d{2})(\d{4})(\d{4})(\d{2})(\d{10})$/;
  return ibanRegex.test(iban);
}

export function extractIBANComponents(iban: string): {
  isValid: boolean;
  controlDigits: string;
  bankCode: string;
  branchCode: string;
  checkDigits: string;
  accountNumber: string;
} | null {
  const ibanRegex = /^ES(\d{2})(\d{4})(\d{4})(\d{2})(\d{10})$/;
  const match = iban.match(ibanRegex);

  if (match) {
    const [, controlDigits, bankCode, branchCode, checkDigits, accountNumber] =
      match;
    return {
      isValid: true,
      controlDigits,
      bankCode,
      branchCode,
      checkDigits,
      accountNumber,
    };
  } else {
    return null; // No es un IBAN válido según la estructura
  }
}

export function validateIBAN() {
  const ibanInput = document.getElementById('ibanInput');
  const resultsDiv = document.getElementById('results');

  if (!(ibanInput instanceof HTMLInputElement)) {
    console.error(
      'El elemento IBANInput no se encontró o no es un campo de entrada válido.'
    );
    return;
  }

  if (!(resultsDiv instanceof HTMLDivElement)) {
    console.error(
      'El elemento resultsDiv no se encontró o no es un div válido.'
    );
    return;
  }

  const iban = ibanInput.value.replace(/[\s-]/g, '');
  const isValidStructure = isValidIBANStructure(iban);
  const components = extractIBANComponents(iban);

  let resultHTML = '';

  if (isValidStructure && components) {
    const { bankCode, branchCode, controlDigits, checkDigits, accountNumber } =
      components;
    const isValid = isValidIBAN(iban);

    resultHTML += `<div class="result">El IBAN está bien formado</div>`;
    resultHTML += `<div class="result">El IBAN es ${
      isValid ? 'válido' : 'inválido'
    }</div>`;
    resultHTML += `<div class="result">Banco: ${
      bankCodes[bankCode] || 'Banco no encontrado'
    }</div>`;
    resultHTML += `<div class="result">Código sucursal: ${branchCode}</div>`;
    resultHTML += `<div class="result">Dígito de control: ${
      controlDigits + checkDigits
    }</div>`;
    resultHTML += `<div class="result">Número de cuenta: ${accountNumber}</div>`;
  } else {
    resultHTML += `<div class="result">El formato del IBAN no es correcto para un IBAN español.</div>`;
  }

  resultsDiv.innerHTML = resultHTML;
}
