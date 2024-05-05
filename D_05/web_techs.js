const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

  // ej 05 verifique si Sass existe en el array y si existe, 
  // imprima 'Sass es un preproceso de CSS'. Si no existe, 
  // agregue Sass al array e imprima el array.

  if ( webTechs.includes('Sass') ) {
    console.log('Sass .....')
  } else {
    webTechs.unshift('Sass')
  }
  console.log(webTechs)