
const addSuffix = projet => {
  const suffix = process.env.NODE_ENV === 'development' ? '-debug' : '';
  return projet + suffix;
}

const findPrevProjet = (projets, projetIndex) => {
  const projet = projets[projets.findIndex(projetIndex) - 1] || projets[projets.length - 1];
  return addSuffix(projet);
}

const findNextProjet = (projets, projetIndex) => {
  const projet = projets[projets.findIndex(projetIndex) + 1] || projets[0];
  return addSuffix(projet);
}


export {
  addSuffix,
  findPrevProjet,
  findNextProjet
}
