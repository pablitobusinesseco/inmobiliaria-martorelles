export interface PropertyImage {
  id: number;
  propertyId: number;
  url: string;
  sortOrder: number;
}

export interface Property {
  id: number;
  type: "house" | "apartment" | "land" | "commercial" | "other";
  transactionType: "sale" | "rent";
  titleEs: string;
  titleCa: string;
  titleEn: string;
  descriptionEs: string;
  descriptionCa: string;
  descriptionEn: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  extraArea: number;
  extraAreaLabel: string | null;
  tag: "featured" | "exclusive" | "new";
  isActive: number;
  sortOrder: number;
  images: PropertyImage[];
}

export const PROPERTIES_DATA: Property[] = [
  {
    id: 4,
    type: "house",
    transactionType: "rent",
    titleEs: "Casa de Alquiler en Sant Fost de Campsentelles",
    titleCa: "Casa de Lloguer a Sant Fost de Campsentelles",
    titleEn: "House for Rent in Sant Fost de Campsentelles",
    descriptionEs: "Magnífica casa de 85m² habitables en una parcela de 500m². Ubicada en Sant Fost de Campsentelles, ofrece un entorno tranquilo y espacioso, ideal para disfrutar de la naturaleza y la privacidad.",
    descriptionCa: "Magnífica casa de 85m² habitables en una parcel·la de 500m². Situada a Sant Fost de Campsentelles, ofereix un entorn tranquil i espaiós, ideal per gaudir de la natura i la privadesa.",
    descriptionEn: "Magnificent house with 85m² of living space on a 500m² plot. Located in Sant Fost de Campsentelles, it offers a quiet and spacious environment, ideal for enjoying nature and privacy.",
    location: "Sant Fost de Campsentelles",
    price: "1.200€/mes",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    extraArea: 500,
    extraAreaLabel: "parcela",
    tag: "new",
    isActive: 1,
    sortOrder: 0,
    images: [
      { id: 401, propertyId: 4, url: "https://storage.googleapis.com/static.inmoweb.es/clients/4320/property/1698690/image/w/comedor-font-better-2.jpg", sortOrder: 0 },
      { id: 402, propertyId: 4, url: "https://storage.googleapis.com/static.inmoweb.es/clients/4320/property/1698690/image/w/lavabo-font-better.jpg", sortOrder: 1 },
      { id: 403, propertyId: 4, url: "https://storage.googleapis.com/static.inmoweb.es/clients/4320/property/1698690/image/w/patio-trasero-2.jpg", sortOrder: 2 }
    ]
  },
  {
    id: 2,
    type: "land",
    transactionType: "sale",
    titleEs: "Parcela Urbanizable en Martorelles",
    titleCa: "Parcel·la Urbanitzable a Martorelles",
    titleEn: "Buildable Plot in Martorelles",
    descriptionEs: "Parcela de 500m² en zona residencial de Martorelles. Terreno con gran potencial para construir la casa de tus sueños en una ubicación privilegiada.",
    descriptionCa: "Parcel·la de 500m² en zona residencial de Martorelles. Terreny amb gran potencial per construir la casa dels teus somnis en una ubicació privilegiada.",
    descriptionEn: "Plot of 500m² in a residential area of Martorelles. Land with great potential to build your dream home in a privileged location.",
    location: "Martorelles, Vallès Oriental",
    price: "103.700 €",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    extraArea: 0,
    extraAreaLabel: null,
    tag: "exclusive",
    isActive: 1,
    sortOrder: 2,
    images: [
      { id: 201, propertyId: 2, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/parcela-1_64c4468b.jpg", sortOrder: 0 }
    ]
  },
  {
    id: 3,
    type: "land",
    transactionType: "sale",
    titleEs: "Parcela con Vistas en Martorelles",
    titleCa: "Parcel·la amb Vistes a Martorelles",
    titleEn: "Plot with Views in Martorelles",
    descriptionEs: "Magnífica parcela con vistas panorámicas en Martorelles. Terreno ideal para proyecto residencial con orientación privilegiada y entorno natural.",
    descriptionCa: "Magnífica parcel·la amb vistes panoràmiques a Martorelles. Terreny ideal per a projecte residencial amb orientació privilegiada i entorn natural.",
    descriptionEn: "Magnificent plot with panoramic views in Martorelles. Ideal land for a residential project with privileged orientation and natural surroundings.",
    location: "Martorelles, Vallès Oriental",
    price: "107.000 €",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    extraArea: 0,
    extraAreaLabel: null,
    tag: "new",
    isActive: 1,
    sortOrder: 3,
    images: [
      { id: 301, propertyId: 3, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/parcela-2_b6270046.png", sortOrder: 0 }
    ]
  }
];
