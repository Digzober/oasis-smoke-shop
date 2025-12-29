export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  region: string;
}

// East Albuquerque stores
export const eastABQStores: Store[] = [
  {
    id: 'heights',
    name: 'HEIGHTS',
    address: '8215 Menaul Blvd NE',
    city: 'Albuquerque, NM 87110',
    hours: 'Mon–Sun 10am–9pm',
    phone: '(505) 503-6527',
    region: 'East Albuquerque'
  },
  {
    id: 'san-mateo',
    name: 'SAN MATEO',
    address: '3401 San Mateo Blvd NE',
    city: 'Albuquerque, NM 87110',
    hours: 'Mon–Sun 11am–7pm',
    phone: '(505) 717-7464',
    region: 'East Albuquerque'
  },
  {
    id: 'midtown',
    name: 'MIDTOWN',
    address: '3500 Menaul Blvd NE Unit 7',
    city: 'Albuquerque, NM 87107',
    hours: 'Mon–Sun 11am–8pm',
    phone: '(505) 880-8273',
    region: 'East Albuquerque'
  },
  {
    id: 'paseo',
    name: 'PASEO',
    address: '7441 Paseo Del Norte NE Suite C',
    city: 'Albuquerque, NM 87113',
    hours: 'Mon–Sun 11am–7pm',
    phone: '(505) 433-3167',
    region: 'East Albuquerque'
  },
  {
    id: 'eubank',
    name: 'EUBANK',
    address: '425 Eubank Blvd NE',
    city: 'Albuquerque, NM',
    hours: 'Mon–Sat 10am–8pm, Sun 10am–6pm',
    phone: '(505) 880-8273',
    region: 'East Albuquerque'
  }
];

// West Albuquerque stores
export const westABQStores: Store[] = [
  {
    id: 'coors',
    name: 'COORS',
    address: '3730 Coors Blvd NW, Suite A',
    city: 'Albuquerque, NM 87120',
    hours: 'Mon–Sun 10am–8pm',
    phone: '(505) 234-6661',
    region: 'West Albuquerque'
  },
  {
    id: '98th',
    name: '98TH STREET',
    address: '101 98th Street NW Suite 103',
    city: 'Albuquerque, NM 87121',
    hours: 'Mon–Sun 11am–8pm',
    phone: '(505) 717-1765',
    region: 'West Albuquerque'
  },
  {
    id: 'golf-course',
    name: 'GOLF COURSE',
    address: '10200 Golf Course Road NW',
    city: 'Albuquerque, NM 87114',
    hours: 'Mon–Sun 11am–7pm',
    phone: '(505) 539-5981',
    region: 'West Albuquerque'
  }
];

// Rio Rancho stores
export const rioRanchoStores: Store[] = [
  {
    id: 'rio-rancho',
    name: 'RIO RANCHO',
    address: '1670 Rio Rancho Blvd Suite D',
    city: 'Rio Rancho, NM 87124',
    hours: 'Mon–Sun 11am–8pm',
    phone: '(505) 994-8463',
    region: 'Rio Rancho'
  }
];

// Bernalillo stores
export const bernalilloStores: Store[] = [
  {
    id: 'bernalillo',
    name: 'BERNALILLO',
    address: '140 E HWY 550 Suite C',
    city: 'Bernalillo, NM 87004',
    hours: 'Mon–Sun 11am–8pm',
    phone: '(505) 639-4245',
    region: 'Bernalillo'
  }
];

// All stores combined
export const allStores: Store[] = [
  ...eastABQStores,
  ...westABQStores,
  ...rioRanchoStores,
  ...bernalilloStores
];
