import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { sql } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL);

const CASA_REAL_IMAGES = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-1_8512637e.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-2_1cd380ef.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-3_f41b18f1.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-4_098bd8a3.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-5_ff38293b.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-6_60dd0138.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-7_7aedb9bd.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-8_5e2fb289.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-9_d67281fb.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-10_ce9d54d3.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-11_6decb175.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-12_fcccbc81.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-13_9de769c7.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-14_f7e7d7ab.jpg",
];

const PARCELA_1_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/parcela-1_64c4468b.jpg";
const PARCELA_2_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/parcela-2_b6270046.png";

async function seed() {
  console.log("Seeding properties...");

  // Clear existing data
  await db.execute(sql`DELETE FROM property_images`);
  await db.execute(sql`DELETE FROM properties`);

  // Insert Property 1: Casa con Patio
  await db.execute(sql`INSERT INTO properties (type, transactionType, titleEs, titleCa, titleEn, descriptionEs, descriptionCa, descriptionEn, location, price, bedrooms, bathrooms, area, extraArea, extraAreaLabel, tag, isActive, sortOrder)
    VALUES ('house', 'sale', 'Casa con Patio en Martorelles', 'Casa amb Pati a Martorelles', 'House with Patio in Martorelles',
    'Encantadora casa de 80m² con un amplio patio de 60m² en el corazón de Martorelles. Ideal para familias que buscan un hogar con espacio exterior en una zona tranquila y bien comunicada.',
    'Encantadora casa de 80m² amb un ampli pati de 60m² al cor de Martorelles. Ideal per a famílies que busquen una llar amb espai exterior en una zona tranquil·la i ben comunicada.',
    'Charming 80m² house with a spacious 60m² patio in the heart of Martorelles. Ideal for families looking for a home with outdoor space in a quiet, well-connected area.',
    'Martorelles, Vallès Oriental', 'Consultar', 3, 2, 80, 60, 'patio', 'featured', 1, 1)`);

  // Insert Property 2: Parcela 1
  await db.execute(sql`INSERT INTO properties (type, transactionType, titleEs, titleCa, titleEn, descriptionEs, descriptionCa, descriptionEn, location, price, bedrooms, bathrooms, area, extraArea, extraAreaLabel, tag, isActive, sortOrder)
    VALUES ('land', 'sale', 'Parcela Urbanizable en Martorelles', 'Parcel·la Urbanitzable a Martorelles', 'Buildable Plot in Martorelles',
    'Parcela de 500m² en zona residencial de Martorelles. Terreno con gran potencial para construir la casa de tus sueños en una ubicación privilegiada.',
    'Parcel·la de 500m² en zona residencial de Martorelles. Terreny amb gran potencial per construir la casa dels teus somnis en una ubicació privilegiada.',
    'Plot of 500m² in a residential area of Martorelles. Land with great potential to build your dream home in a privileged location.',
    'Martorelles, Vallès Oriental', '103.700 €', 0, 0, 500, 0, NULL, 'exclusive', 1, 2)`);

  // Insert Property 3: Parcela 2
  await db.execute(sql`INSERT INTO properties (type, transactionType, titleEs, titleCa, titleEn, descriptionEs, descriptionCa, descriptionEn, location, price, bedrooms, bathrooms, area, extraArea, extraAreaLabel, tag, isActive, sortOrder)
    VALUES ('land', 'sale', 'Parcela con Vistas en Martorelles', 'Parcel·la amb Vistes a Martorelles', 'Plot with Views in Martorelles',
    'Magnífica parcela con vistas panorámicas en Martorelles. Terreno ideal para proyecto residencial con orientación privilegiada y entorno natural.',
    'Magnífica parcel·la amb vistes panoràmiques a Martorelles. Terreny ideal per a projecte residencial amb orientació privilegiada i entorn natural.',
    'Magnificent plot with panoramic views in Martorelles. Ideal land for a residential project with privileged orientation and natural surroundings.',
    'Martorelles, Vallès Oriental', '107.000 €', 0, 0, 500, 0, NULL, 'new', 1, 3)`);

  // Get property IDs
  const rows = await db.execute(sql`SELECT id, titleEs FROM properties ORDER BY sortOrder`);
  console.log("Properties inserted:", rows[0]);

  const propIds = rows[0].map(r => r.id);

  // Insert images for Property 1 (Casa con Patio - 14 images)
  for (let i = 0; i < CASA_REAL_IMAGES.length; i++) {
    await db.execute(sql`INSERT INTO property_images (propertyId, url, sortOrder) VALUES (${propIds[0]}, ${CASA_REAL_IMAGES[i]}, ${i})`);
  }

  // Insert image for Property 2 (Parcela 1)
  await db.execute(sql`INSERT INTO property_images (propertyId, url, sortOrder) VALUES (${propIds[1]}, ${PARCELA_1_IMAGE}, 0)`);

  // Insert image for Property 3 (Parcela 2)
  await db.execute(sql`INSERT INTO property_images (propertyId, url, sortOrder) VALUES (${propIds[2]}, ${PARCELA_2_IMAGE}, 0)`);

  console.log("Images inserted for all properties.");
  console.log("Seed complete!");
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
