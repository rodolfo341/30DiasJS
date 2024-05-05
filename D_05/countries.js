const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

  // ej 04 verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. 
  // Si no existe agregar a la lista de países.

  if ( countries.includes('Ethiopia') ) {
    console.log('ETHIOPIA')
  } else {
    countries.unshift('Ethiopia')
  }