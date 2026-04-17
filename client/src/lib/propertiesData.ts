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
    id: 1,
    type: "house",
    transactionType: "sale",
    titleEs: "Casa con Patio en Martorelles",
    titleCa: "Casa amb Pati a Martorelles",
    titleEn: "House with Patio in Martorelles",
    descriptionEs: "Encantadora casa de 80m² con un amplio patio de 60m² en el corazón de Martorelles. Ideal para familias que buscan un hogar con espacio exterior en una zona tranquila y bien comunicada.",
    descriptionCa: "Encantadora casa de 80m² amb un ampli pati de 60m² al cor de Martorelles. Ideal per a famílies que busquen una llar amb espai exterior en una zona tranquil·la i ben comunicada.",
    descriptionEn: "Charming 80m² house with a spacious 60m² patio in the heart of Martorelles. Ideal for families looking for a home with outdoor space in a quiet, well-connected area.",
    location: "Martorelles, Vallès Oriental",
    price: "Consultar",
    bedrooms: 3,
    bathrooms: 2,
    area: 80,
    extraArea: 60,
    extraAreaLabel: "patio",
    tag: "featured",
    isActive: 1,
    sortOrder: 1,
    images: [
      { id: 101, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-1_8512637e.jpg", sortOrder: 0 },
      { id: 102, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-2_1cd380ef.jpg", sortOrder: 1 },
      { id: 103, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-3_f41b18f1.jpg", sortOrder: 2 },
      { id: 104, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-4_098bd8a3.jpg", sortOrder: 3 },
      { id: 105, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-5_ff38293b.jpg", sortOrder: 4 },
      { id: 106, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-6_60dd0138.jpg", sortOrder: 5 },
      { id: 107, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-7_7aedb9bd.jpg", sortOrder: 6 },
      { id: 108, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-8_5e2fb289.jpg", sortOrder: 7 },
      { id: 109, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTavGkgE2y5gLQWs2/casa-real-9_d67281fb.jpg", sortOrder: 8 },
      { id: 110, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-10_ce9d54d3.jpg", sortOrder: 9 },
      { id: 111, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-11_6decb175.jpg", sortOrder: 10 },
      { id: 112, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-12_fcccbc81.jpg", sortOrder: 11 },
      { id: 113, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-13_9de769c7.jpg", sortOrder: 12 },
      { id: 114, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-14_f7e7d7ab.jpg", sortOrder: 13 }
    ]
  },
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
      { id: 401, propertyId: 4, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-1_8512637e.jpg", sortOrder: 0 }
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
