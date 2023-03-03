export const ServiceData = [
  // defined serviceData with an array of objects
  { nom: 'Entretien au Domicile', type: 'Domicile' },
  { nom: 'Sortie', type: 'Domicile' },
  { nom: 'Déplacement au domicile', type: 'Domicile' },
  { nom: 'Repassage', type: 'Domicile' },
  { nom: 'Surveillance', type: 'Domicile' },
  { nom: 'Aide au lever/coucher', type: 'Autonomie' },
  { nom: 'Préparation des repas', type: 'Autonomie' },
  { nom: 'aide prise de medicament', type: 'Autonomie' },
  { nom: 'aide à la prise des repas', type: 'Autonomie' },
  { nom: 'Garde de jour/nuit', type: 'Autonomie' },
];

export const serviceDataCheckboxItems = [
  { value: 'Entretien au Domicile', isChecked: false, type: 'Domicile' },
  { value: 'Sortie', isChecked: false, type: 'Domicile' },
  { value: 'Déplacement au domicile', isChecked: false, type: 'Domicile' },
  { value: 'Repassage', isChecked: false, type: 'Domicile' },
  { value: 'Surveillance', isChecked: false, type: 'Domicile' },
  { value: 'Aide au lever/coucher', isChecked: false, type: 'Autonomie' },
  { value: 'Préparation des repas', isChecked: false, type: 'Autonomie' },
  { value: 'aide prise de medicament', isChecked: false, type: 'Autonomie' },
  { value: 'aide à la prise des repas', isChecked: false, type: 'Autonomie' },
  { value: 'Garde de jour/nuit', isChecked: false, type: 'Autonomie' },
];

export const NosServicesData = [
  {
    src: 'entretien',
    nomDesServices: 'Entretien',
    type: 'domicile',
  },

  {
    src: 'repassage',
    nomDesServices: 'Repassage',
    type: 'domicile',
  },
  {
    src: 'deplacement-domicile',

    nomDesServices: 'Déplacement au domicile',
    type: 'domicile',
  },
  {
    src: 'sortie',
    nomDesServices: 'Sortie',
    type: 'domicile',
  },
  {
    src: 'surveillance',
    nomDesServices: 'Surveillance',

    type: 'domicile',
  },
  {
    src: 'aide-prise-de-medicament',
    nomDesServices: 'Aide prise de medicament',
    type: 'autonomie',
  },
  {
    src: 'preparation-repas',
    nomDesServices: 'Préparation des repas',
    type: 'autonomie',
  },

  {
    src: 'repas',
    nomDesServices: 'Prise des repas',
    type: 'autonomie',
  },

  {
    src: 'toilette',
    nomDesServices: 'Aide à la toilette',
    type: 'autonomie',
  },

  {
    src: 'lever-coucher',
    nomDesServices: 'Aide au lever/coucher',
    type: 'autonomie',
  },

  {
    src: 'garde-jour-nuit',
    nomDesServices: 'Garde de jour/nuit',
    type: 'autonomie',
  },
];


export function getSrcFromNomDesServices(nomDesServices: string) {
  const service = NosServicesData.find(
    (s) => s.nomDesServices === nomDesServices
  );
  return service ? service.src : null;
}
