export type Locale = "es" | "ca" | "en";

export const localeLabels: Record<Locale, string> = {
  es: "Castellano",
  ca: "Català",
  en: "English",
};

const translations = {
  // ─── NAV ───
  "nav.home": { es: "Inicio", ca: "Inici", en: "Home" },
  "nav.services": { es: "Servicios", ca: "Serveis", en: "Services" },
  "nav.properties": { es: "Propiedades", ca: "Propietats", en: "Properties" },
  "nav.about": { es: "Sobre Nosotros", ca: "Sobre Nosaltres", en: "About Us" },
  "nav.contact": { es: "Contacto", ca: "Contacte", en: "Contact" },
  "nav.cta": { es: "Contactar", ca: "Contactar", en: "Contact Us" },
  "nav.slogan": {
    es: "Tu hogar, nuestra prioridad",
    ca: "La teva llar, la nostra prioritat",
    en: "Your home, our priority",
  },

  // ─── HERO ───
  "hero.label": {
    es: "Agencia inmobiliaria en el Vallès Oriental",
    ca: "Agència immobiliària al Vallès Oriental",
    en: "Real estate agency in Vallès Oriental",
  },
  "hero.title1": {
    es: "Encuentra el hogar",
    ca: "Troba la llar",
    en: "Find the home",
  },
  "hero.title2": {
    es: "que mereces",
    ca: "que mereixes",
    en: "you deserve",
  },
  "hero.description": {
    es: "Más de 3 años de experiencia acompañando a familias en la compra, venta y alquiler de propiedades en Martorelles y alrededores.",
    ca: "Més de 3 anys d'experiència acompanyant famílies en la compra, venda i lloguer de propietats a Martorelles i voltants.",
    en: "Over 3 years of experience helping families buy, sell and rent properties in Martorelles and surrounding areas.",
  },
  "hero.cta1": {
    es: "Ver propiedades",
    ca: "Veure propietats",
    en: "View properties",
  },
  "hero.cta2": {
    es: "Solicitar valoración",
    ca: "Sol·licitar valoració",
    en: "Request valuation",
  },
  "hero.stat1": { es: "Propiedades vendidas", ca: "Propietats venudes", en: "Properties sold" },
  "hero.stat2": { es: "Años de experiencia", ca: "Anys d'experiència", en: "Years of experience" },
  "hero.stat3": { es: "Clientes satisfechos", ca: "Clients satisfets", en: "Satisfied clients" },
  "hero.stat4": { es: "Respuesta garantizada", ca: "Resposta garantida", en: "Guaranteed response" },

  // ─── SERVICES (home summary) ───
  "services.label": { es: "Nuestros servicios", ca: "Els nostres serveis", en: "Our services" },
  "services.title1": {
    es: "Un servicio completo para",
    ca: "Un servei complet per a",
    en: "A complete service for",
  },
  "services.title2": {
    es: "cada necesidad inmobiliaria",
    ca: "cada necessitat immobiliària",
    en: "every real estate need",
  },
  "services.description": {
    es: "Ofrecemos una atención cercana y profesional, adaptada a las particularidades del mercado inmobiliario del Vallès Oriental.",
    ca: "Oferim una atenció propera i professional, adaptada a les particularitats del mercat immobiliari del Vallès Oriental.",
    en: "We offer close and professional attention, adapted to the particularities of the Vallès Oriental real estate market.",
  },
  "services.viewAll": {
    es: "Ver todos los servicios",
    ca: "Veure tots els serveis",
    en: "View all services",
  },

  // ─── SERVICES ITEMS ───
  "svc.buy.title": { es: "Compraventa", ca: "Compravenda", en: "Buy & Sell" },
  "svc.buy.desc": {
    es: "Gestionamos la compra y venta de propiedades con un servicio integral, desde la valoración hasta la firma ante notario.",
    ca: "Gestionem la compra i venda de propietats amb un servei integral, des de la valoració fins a la signatura davant notari.",
    en: "We manage the purchase and sale of properties with a comprehensive service, from valuation to notary signing.",
  },
  "svc.buy.long": {
    es: "Nuestro equipo de expertos te acompaña en todo el proceso de compraventa. Realizamos un análisis exhaustivo del mercado para garantizar el mejor precio, gestionamos las visitas, negociamos en tu nombre y coordinamos todos los trámites legales y administrativos hasta la firma ante notario. Con más de 500 operaciones realizadas, nuestra experiencia es tu mejor garantía.",
    ca: "El nostre equip d'experts t'acompanya en tot el procés de compravenda. Realitzem una anàlisi exhaustiva del mercat per garantir el millor preu, gestionem les visites, negociem en el teu nom i coordinem tots els tràmits legals i administratius fins a la signatura davant notari. Amb més de 500 operacions realitzades, la nostra experiència és la teva millor garantia.",
    en: "Our team of experts accompanies you throughout the entire buying and selling process. We carry out an exhaustive market analysis to guarantee the best price, manage viewings, negotiate on your behalf and coordinate all legal and administrative procedures until the notary signing. With over 500 transactions completed, our experience is your best guarantee.",
  },
  "svc.rent.title": { es: "Alquiler", ca: "Lloguer", en: "Rental" },
  "svc.rent.desc": {
    es: "Encontramos el inquilino ideal para tu propiedad o el hogar perfecto para ti, con gestión completa del proceso.",
    ca: "Trobem l'inquilí ideal per a la teva propietat o la llar perfecta per a tu, amb gestió completa del procés.",
    en: "We find the ideal tenant for your property or the perfect home for you, with complete process management.",
  },
  "svc.rent.long": {
    es: "Ofrecemos un servicio completo de gestión de alquileres que incluye la búsqueda y selección de inquilinos solventes, redacción de contratos, gestión de fianzas, seguimiento de pagos y resolución de incidencias. Para inquilinos, realizamos una búsqueda personalizada según tus necesidades y presupuesto, organizamos visitas y te asesoramos durante todo el proceso.",
    ca: "Oferim un servei complet de gestió de lloguers que inclou la cerca i selecció d'inquilins solvents, redacció de contractes, gestió de fiances, seguiment de pagaments i resolució d'incidències. Per a inquilins, realitzem una cerca personalitzada segons les teves necessitats i pressupost, organitzem visites i t'assessorem durant tot el procés.",
    en: "We offer a complete rental management service that includes searching and selecting solvent tenants, drafting contracts, managing deposits, payment tracking and incident resolution. For tenants, we carry out a personalized search according to your needs and budget, organize viewings and advise you throughout the process.",
  },
  "svc.valuation.title": { es: "Valoración gratuita", ca: "Valoració gratuïta", en: "Free valuation" },
  "svc.valuation.desc": {
    es: "Realizamos una valoración profesional y sin compromiso de tu propiedad, basada en datos reales del mercado local.",
    ca: "Realitzem una valoració professional i sense compromís de la teva propietat, basada en dades reals del mercat local.",
    en: "We carry out a professional, no-obligation valuation of your property, based on real local market data.",
  },
  "svc.valuation.long": {
    es: "Nuestra valoración se basa en un análisis comparativo del mercado, teniendo en cuenta las transacciones recientes en la zona, las características específicas de tu propiedad y las tendencias actuales del mercado inmobiliario. Te proporcionamos un informe detallado con el valor estimado y las recomendaciones para maximizar el precio de venta.",
    ca: "La nostra valoració es basa en una anàlisi comparativa del mercat, tenint en compte les transaccions recents a la zona, les característiques específiques de la teva propietat i les tendències actuals del mercat immobiliari. Et proporcionem un informe detallat amb el valor estimat i les recomanacions per maximitzar el preu de venda.",
    en: "Our valuation is based on a comparative market analysis, taking into account recent transactions in the area, the specific characteristics of your property and current real estate market trends. We provide you with a detailed report with the estimated value and recommendations to maximize the sale price.",
  },
  "svc.legal.title": { es: "Asesoría legal", ca: "Assessoria legal", en: "Legal advice" },
  "svc.legal.desc": {
    es: "Nuestro equipo legal te acompaña en cada paso, garantizando la seguridad jurídica de todas tus operaciones.",
    ca: "El nostre equip legal t'acompanya a cada pas, garantint la seguretat jurídica de totes les teves operacions.",
    en: "Our legal team accompanies you every step of the way, guaranteeing the legal security of all your transactions.",
  },
  "svc.legal.long": {
    es: "Contamos con abogados especializados en derecho inmobiliario que revisan toda la documentación, verifican cargas y gravámenes, aseguran el cumplimiento normativo y te representan en cualquier gestión legal necesaria. Tu tranquilidad es nuestra prioridad.",
    ca: "Comptem amb advocats especialitzats en dret immobiliari que revisen tota la documentació, verifiquen càrregues i gravàmens, asseguren el compliment normatiu i et representen en qualsevol gestió legal necessària. La teva tranquil·litat és la nostra prioritat.",
    en: "We have lawyers specialized in real estate law who review all documentation, verify charges and encumbrances, ensure regulatory compliance and represent you in any necessary legal proceedings. Your peace of mind is our priority.",
  },
  "svc.search.title": { es: "Búsqueda personalizada", ca: "Cerca personalitzada", en: "Personalized search" },
  "svc.search.desc": {
    es: "Definimos tu perfil de búsqueda y te presentamos propiedades que se ajustan exactamente a tus necesidades.",
    ca: "Definim el teu perfil de cerca i et presentem propietats que s'ajusten exactament a les teves necessitats.",
    en: "We define your search profile and present you with properties that exactly match your needs.",
  },
  "svc.search.long": {
    es: "Escuchamos tus necesidades, presupuesto y preferencias para crear un perfil de búsqueda detallado. Accedemos a nuestra amplia base de datos y red de contactos para encontrar propiedades que se ajusten a tus criterios, incluso antes de que salgan al mercado. Te mantenemos informado con alertas personalizadas.",
    ca: "Escoltem les teves necessitats, pressupost i preferències per crear un perfil de cerca detallat. Accedim a la nostra àmplia base de dades i xarxa de contactes per trobar propietats que s'ajustin als teus criteris, fins i tot abans que surtin al mercat. Et mantenim informat amb alertes personalitzades.",
    en: "We listen to your needs, budget and preferences to create a detailed search profile. We access our extensive database and network of contacts to find properties that match your criteria, even before they hit the market. We keep you informed with personalized alerts.",
  },
  "svc.management.title": { es: "Gestión integral", ca: "Gestió integral", en: "Full management" },
  "svc.management.desc": {
    es: "Nos encargamos de todos los trámites: certificados energéticos, cédulas de habitabilidad, hipotecas y más.",
    ca: "Ens encarreguem de tots els tràmits: certificats energètics, cèdules d'habitabilitat, hipoteques i més.",
    en: "We handle all paperwork: energy certificates, habitability certificates, mortgages and more.",
  },
  "svc.management.long": {
    es: "Gestionamos de principio a fin todos los trámites necesarios: obtención de certificados energéticos, cédulas de habitabilidad, notas simples, gestión hipotecaria con las mejores condiciones del mercado, coordinación con notarías y registro de la propiedad. Un servicio llave en mano para que tú no tengas que preocuparte de nada.",
    ca: "Gestionem de principi a fi tots els tràmits necessaris: obtenció de certificats energètics, cèdules d'habitabilitat, notes simples, gestió hipotecària amb les millors condicions del mercat, coordinació amb notaries i registre de la propietat. Un servei clau en mà perquè tu no hagis de preocupar-te de res.",
    en: "We manage all necessary procedures from start to finish: obtaining energy certificates, habitability certificates, property notes, mortgage management with the best market conditions, coordination with notaries and property registry. A turnkey service so you don't have to worry about anything.",
  },

  // ─── PROPERTIES ───
  "props.label": { es: "Propiedades destacadas", ca: "Propietats destacades", en: "Featured properties" },
  "props.title1": { es: "Selección exclusiva de", ca: "Selecció exclusiva de", en: "Exclusive selection of" },
  "props.title2": { es: "propiedades en la zona", ca: "propietats a la zona", en: "properties in the area" },
  "props.viewAll": { es: "Ver todas las propiedades", ca: "Veure totes les propietats", en: "View all properties" },
  "props.sale": { es: "Venta", ca: "Venda", en: "Sale" },
  "props.rent": { es: "Alquiler", ca: "Lloguer", en: "Rental" },
  "props.featured": { es: "Destacado", ca: "Destacat", en: "Featured" },
  "props.exclusive": { es: "Exclusivo", ca: "Exclusiu", en: "Exclusive" },
  "props.new": { es: "Nuevo", ca: "Nou", en: "New" },

  // ─── ABOUT ───
  "about.label": { es: "Sobre nosotros", ca: "Sobre nosaltres", en: "About us" },
  "about.title1": { es: "Conocimiento local,", ca: "Coneixement local,", en: "Local knowledge," },
  "about.title2": { es: "servicio excepcional", ca: "servei excepcional", en: "exceptional service" },
  "about.p1": {
    es: "En Inmobiliaria Martorelles llevamos más de 3 años ayudando a familias a encontrar su hogar ideal en el Vallès Oriental. Nuestro profundo conocimiento del mercado local nos permite ofrecer valoraciones precisas y un asesoramiento personalizado en cada operación.",
    ca: "A Immobiliària Martorelles portem més de 3 anys ajudant famílies a trobar la seva llar ideal al Vallès Oriental. El nostre profund coneixement del mercat local ens permet oferir valoracions precises i un assessorament personalitzat en cada operació.",
    en: "At Inmobiliaria Martorelles we have been helping families find their ideal home in the Vallès Oriental for over 3 years. Our deep knowledge of the local market allows us to offer accurate valuations and personalized advice in every transaction.",
  },
  "about.p2": {
    es: "Creemos que comprar o vender una propiedad es una de las decisiones más importantes de la vida, y por eso acompañamos a nuestros clientes en cada paso del proceso con transparencia, dedicación y profesionalidad.",
    ca: "Creiem que comprar o vendre una propietat és una de les decisions més importants de la vida, i per això acompanyem els nostres clients a cada pas del procés amb transparència, dedicació i professionalitat.",
    en: "We believe that buying or selling a property is one of the most important decisions in life, and that is why we accompany our clients every step of the way with transparency, dedication and professionalism.",
  },
  "about.donation.title": {
    es: "Compromiso con los animales",
    ca: "Compromís amb els animals",
    en: "Commitment to animals",
  },
  "about.donation.text": {
    es: "En Inmobiliaria Martorelles creemos en devolver a la comunidad. Por eso, destinamos parte de nuestros beneficios a protectoras de animales locales, contribuyendo al cuidado y la adopción de animales abandonados. Porque encontrar un hogar no es solo cosa de personas.",
    ca: "A Immobiliària Martorelles creiem en retornar a la comunitat. Per això, destinem part dels nostres beneficis a protectores d'animals locals, contribuint a la cura i l'adopció d'animals abandonats. Perquè trobar una llar no és només cosa de persones.",
    en: "At Inmobiliaria Martorelles we believe in giving back to the community. That is why we allocate part of our profits to local animal shelters, contributing to the care and adoption of abandoned animals. Because finding a home is not just for people.",
  },
  "about.years": { es: "Años de experiencia", ca: "Anys d'experiència", en: "Years of experience" },

  // ─── VALUES ───
  "val.commitment.title": { es: "Compromiso", ca: "Compromís", en: "Commitment" },
  "val.commitment.text": {
    es: "Tratamos cada operación como si fuera la nuestra propia.",
    ca: "Tractem cada operació com si fos la nostra pròpia.",
    en: "We treat every transaction as if it were our own.",
  },
  "val.closeness.title": { es: "Cercanía", ca: "Proximitat", en: "Closeness" },
  "val.closeness.text": {
    es: "Somos vecinos de Martorelles, conocemos cada rincón.",
    ca: "Som veïns de Martorelles, coneixem cada racó.",
    en: "We are neighbors of Martorelles, we know every corner.",
  },
  "val.professionalism.title": { es: "Profesionalidad", ca: "Professionalitat", en: "Professionalism" },
  "val.professionalism.text": {
    es: "Formación continua y conocimiento del mercado local.",
    ca: "Formació contínua i coneixement del mercat local.",
    en: "Continuous training and local market knowledge.",
  },
  "val.specialization.title": { es: "Especialización", ca: "Especialització", en: "Specialization" },
  "val.specialization.text": {
    es: "Expertos en el Vallès Oriental y comarca.",
    ca: "Experts al Vallès Oriental i comarca.",
    en: "Experts in the Vallès Oriental region.",
  },

  // ─── TESTIMONIALS ───
  "test.label": { es: "Testimonios", ca: "Testimonis", en: "Testimonials" },
  "test.1.name": { es: "María García", ca: "Maria García", en: "María García" },
  "test.1.role": {
    es: "Compradora en Martorelles",
    ca: "Compradora a Martorelles",
    en: "Buyer in Martorelles",
  },
  "test.1.text": {
    es: "Desde el primer momento nos sentimos acompañados. El equipo de Inmobiliaria Martorelles entendió perfectamente lo que buscábamos y nos encontró la casa de nuestros sueños en tiempo récord.",
    ca: "Des del primer moment ens vam sentir acompanyats. L'equip d'Immobiliària Martorelles va entendre perfectament el que buscàvem i ens va trobar la casa dels nostres somnis en temps rècord.",
    en: "From the very first moment we felt supported. The Inmobiliaria Martorelles team perfectly understood what we were looking for and found us our dream home in record time.",
  },
  "test.2.name": { es: "Jordi Puig", ca: "Jordi Puig", en: "Jordi Puig" },
  "test.2.role": {
    es: "Vendedor en Sant Fost",
    ca: "Venedor a Sant Fost",
    en: "Seller in Sant Fost",
  },
  "test.2.text": {
    es: "Vendieron mi piso en menos de dos meses y al precio que esperaba. Su conocimiento del mercado local es impresionante. Totalmente recomendables.",
    ca: "Van vendre el meu pis en menys de dos mesos i al preu que esperava. El seu coneixement del mercat local és impressionant. Totalment recomanables.",
    en: "They sold my apartment in less than two months and at the price I expected. Their knowledge of the local market is impressive. Totally recommended.",
  },
  "test.3.name": { es: "Ana Martínez", ca: "Ana Martínez", en: "Ana Martínez" },
  "test.3.role": {
    es: "Inquilina en Mollet del Vallès",
    ca: "Inquilina a Mollet del Vallès",
    en: "Tenant in Mollet del Vallès",
  },
  "test.3.text": {
    es: "Buscaba un alquiler que se ajustara a mi presupuesto y me ofrecieron varias opciones excelentes. La gestión fue rápida, transparente y sin complicaciones.",
    ca: "Buscava un lloguer que s'ajustés al meu pressupost i em van oferir diverses opcions excel·lents. La gestió va ser ràpida, transparent i sense complicacions.",
    en: "I was looking for a rental that fit my budget and they offered me several excellent options. The management was fast, transparent and hassle-free.",
  },

  // ─── CTA ───
  "cta.label": { es: "Valoración gratuita", ca: "Valoració gratuïta", en: "Free valuation" },
  "cta.title1": { es: "¿Quieres saber cuánto", ca: "Vols saber quant", en: "Want to know how much" },
  "cta.title2": { es: "vale tu propiedad?", ca: "val la teva propietat?", en: "your property is worth?" },
  "cta.desc": {
    es: "Solicita una valoración gratuita y sin compromiso. Nuestros expertos analizarán tu propiedad y te ofrecerán un precio justo basado en el mercado actual.",
    ca: "Sol·licita una valoració gratuïta i sense compromís. Els nostres experts analitzaran la teva propietat i t'oferiran un preu just basat en el mercat actual.",
    en: "Request a free, no-obligation valuation. Our experts will analyze your property and offer you a fair price based on the current market.",
  },
  "cta.check1": {
    es: "Valoración profesional basada en datos reales",
    ca: "Valoració professional basada en dades reals",
    en: "Professional valuation based on real data",
  },
  "cta.check2": {
    es: "Sin compromiso ni coste alguno",
    ca: "Sense compromís ni cap cost",
    en: "No obligation or cost",
  },
  "cta.check3": {
    es: "Respuesta en menos de 24 horas",
    ca: "Resposta en menys de 24 hores",
    en: "Response in less than 24 hours",
  },
  "cta.check4": {
    es: "Conocimiento experto del mercado local",
    ca: "Coneixement expert del mercat local",
    en: "Expert knowledge of the local market",
  },
  "cta.b1": {
    es: "Valoración profesional basada en datos reales",
    ca: "Valoració professional basada en dades reals",
    en: "Professional valuation based on real data",
  },
  "cta.b2": {
    es: "Sin compromiso ni coste alguno",
    ca: "Sense compromís ni cap cost",
    en: "No obligation or cost",
  },
  "cta.b3": {
    es: "Respuesta en menos de 24 horas",
    ca: "Resposta en menys de 24 hores",
    en: "Response in less than 24 hours",
  },
  "cta.b4": {
    es: "Conocimiento experto del mercado local",
    ca: "Coneixement expert del mercat local",
    en: "Expert knowledge of the local market",
  },
  "cta.stat1": { es: "Clientes satisfechos", ca: "Clients satisfets", en: "Satisfied clients" },
  "cta.stat2": { es: "Operaciones realizadas", ca: "Operacions realitzades", en: "Transactions completed" },
  "cta.button": {
    es: "Solicitar valoración gratuita",
    ca: "Sol·licitar valoració gratuïta",
    en: "Request free valuation",
  },
  "cta.satisfied": { es: "Clientes satisfechos", ca: "Clients satisfets", en: "Satisfied clients" },
  "cta.operations": { es: "Operaciones realizadas", ca: "Operacions realitzades", en: "Transactions completed" },

  // ─── CONTACT ───
  "contact.label": { es: "Contacto", ca: "Contacte", en: "Contact" },
  "contact.title1": { es: "Hablemos de tu", ca: "Parlem de la teva", en: "Let's talk about your" },
  "contact.title2": { es: "próximo hogar", ca: "pròxima llar", en: "next home" },
  "contact.desc": {
    es: "Estamos aquí para ayudarte. Contacta con nosotros y te responderemos en menos de 24 horas.",
    ca: "Estem aquí per ajudar-te. Contacta amb nosaltres i et respondrem en menys de 24 hores.",
    en: "We are here to help you. Contact us and we will respond within 24 hours.",
  },
  "contact.address.label": { es: "Dirección", ca: "Adreça", en: "Address" },
  "contact.address.value": { es: "Martorelles, Barcelona", ca: "Martorelles, Barcelona", en: "Martorelles, Barcelona" },
  "contact.address.sub": { es: "Vallès Oriental", ca: "Vallès Oriental", en: "Vallès Oriental" },
  "contact.phone.label": { es: "Teléfono", ca: "Telèfon", en: "Phone" },
  "contact.email.label": { es: "Email", ca: "Email", en: "Email" },
  "contact.hours.label": { es: "Horario", ca: "Horari", en: "Hours" },
  "contact.hours.value": { es: "Lun - Vie: 9:00 - 19:00", ca: "Dll - Div: 9:00 - 19:00", en: "Mon - Fri: 9:00 - 19:00" },
  "contact.hours.sub": { es: "Sáb: 10:00 - 14:00", ca: "Dis: 10:00 - 14:00", en: "Sat: 10:00 - 14:00" },
  "contact.form.title": { es: "Envíanos un mensaje", ca: "Envia'ns un missatge", en: "Send us a message" },
  "contact.form.name": { es: "Nombre completo", ca: "Nom complet", en: "Full name" },
  "contact.form.name.ph": { es: "Tu nombre", ca: "El teu nom", en: "Your name" },
  "contact.form.email": { es: "Email", ca: "Email", en: "Email" },
  "contact.form.phone": { es: "Teléfono", ca: "Telèfon", en: "Phone" },
  "contact.form.interest": { es: "Interesado en", ca: "Interessat en", en: "Interested in" },
  "contact.form.opt.buy": { es: "Comprar una propiedad", ca: "Comprar una propietat", en: "Buy a property" },
  "contact.form.opt.sell": { es: "Vender mi propiedad", ca: "Vendre la meva propietat", en: "Sell my property" },
  "contact.form.opt.rent": { es: "Alquilar", ca: "Llogar", en: "Rent" },
  "contact.form.opt.val": { es: "Valoración gratuita", ca: "Valoració gratuïta", en: "Free valuation" },
  "contact.form.opt.other": { es: "Otro", ca: "Altre", en: "Other" },
  "contact.form.message": { es: "Mensaje", ca: "Missatge", en: "Message" },
  "contact.form.message.ph": {
    es: "Cuéntanos cómo podemos ayudarte...",
    ca: "Explica'ns com podem ajudar-te...",
    en: "Tell us how we can help you...",
  },
  "contact.form.submit": { es: "Enviar mensaje", ca: "Enviar missatge", en: "Send message" },
  "contact.form.success": {
    es: "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
    ca: "Missatge enviat correctament. Ens posarem en contacte amb tu aviat.",
    en: "Message sent successfully. We will contact you soon.",
  },

  // ─── FOOTER ───
  "footer.nav": { es: "Navegación", ca: "Navegació", en: "Navigation" },
  "footer.services": { es: "Servicios", ca: "Serveis", en: "Services" },
  "footer.contact": { es: "Contacto", ca: "Contacte", en: "Contact" },
  "footer.rights": {
    es: "Todos los derechos reservados.",
    ca: "Tots els drets reservats.",
    en: "All rights reserved.",
  },
  "footer.privacy": { es: "Política de privacidad", ca: "Política de privacitat", en: "Privacy policy" },
  "footer.legal": { es: "Aviso legal", ca: "Avís legal", en: "Legal notice" },
  "footer.svc.buy": { es: "Compraventa de inmuebles", ca: "Compravenda d'immobles", en: "Property buying & selling" },
  "footer.svc.rent": { es: "Alquiler de propiedades", ca: "Lloguer de propietats", en: "Property rental" },
  "footer.svc.val": { es: "Valoración gratuita", ca: "Valoració gratuïta", en: "Free valuation" },
  "footer.svc.legal": { es: "Asesoría legal", ca: "Assessoria legal", en: "Legal advice" },
  "footer.svc.mgmt": { es: "Gestión integral", ca: "Gestió integral", en: "Full management" },

  // ─── SERVICES PAGE ───
  "svcPage.hero.title1": {
    es: "Servicios inmobiliarios",
    ca: "Serveis immobiliaris",
    en: "Real estate services",
  },
  "svcPage.hero.title2": {
    es: "a tu medida",
    ca: "a la teva mida",
    en: "tailored to you",
  },
  "svcPage.hero.desc": {
    es: "Ofrecemos un servicio integral que cubre todas las necesidades del mercado inmobiliario, con la cercanía y profesionalidad que nos caracterizan.",
    ca: "Oferim un servei integral que cobreix totes les necessitats del mercat immobiliari, amb la proximitat i professionalitat que ens caracteritzen.",
    en: "We offer a comprehensive service that covers all real estate market needs, with the closeness and professionalism that characterize us.",
  },
  "svcPage.learnMore": { es: "Más información", ca: "Més informació", en: "Learn more" },

  // ─── ABOUT PAGE ───
  "aboutPage.hero.title1": {
    es: "Conócenos",
    ca: "Coneix-nos",
    en: "Get to know us",
  },
  "aboutPage.hero.desc": {
    es: "Somos un equipo apasionado por el sector inmobiliario, comprometido con nuestros clientes y con la comunidad de Martorelles.",
    ca: "Som un equip apassionat pel sector immobiliari, compromès amb els nostres clients i amb la comunitat de Martorelles.",
    en: "We are a team passionate about real estate, committed to our clients and to the Martorelles community.",
  },
  "aboutPage.mission.label": { es: "Nuestra misión", ca: "La nostra missió", en: "Our mission" },
  "aboutPage.mission.text": {
    es: "Hacer que el proceso de compra, venta o alquiler de una propiedad sea una experiencia sencilla, transparente y satisfactoria para todas las partes.",
    ca: "Fer que el procés de compra, venda o lloguer d'una propietat sigui una experiència senzilla, transparent i satisfactòria per a totes les parts.",
    en: "To make the process of buying, selling or renting a property a simple, transparent and satisfying experience for all parties.",
  },
  "aboutPage.values.label": { es: "Nuestros valores", ca: "Els nostres valors", en: "Our values" },

  // ─── CONTACT PAGE ───
  "contactPage.hero.title1": {
    es: "Ponte en contacto",
    ca: "Posa't en contacte",
    en: "Get in touch",
  },
  "contactPage.hero.desc": {
    es: "Estamos aquí para resolver todas tus dudas y ayudarte a encontrar la mejor solución inmobiliaria.",
    ca: "Estem aquí per resoldre tots els teus dubtes i ajudar-te a trobar la millor solució immobiliària.",
    en: "We are here to answer all your questions and help you find the best real estate solution.",
  },

  // CEO FLIP CARD
  "ceo.name": { es: "Rafael Corpas Fernández", ca: "Rafael Corpas Fernández", en: "Rafael Corpas Fernández" },
  "ceo.title": { es: "CEO & Founder", ca: "CEO & Fundador", en: "CEO & Founder" },
  "ceo.flip.text": {
    es: "Tu confianza es nuestra base, tu satisfacción nuestro mejor resultado.",
    ca: "La teva confiança és la nostra base, la teva satisfacció el nostre millor resultat.",
    en: "Your trust is our foundation, your satisfaction our best result.",
  },
  "ceo.flip.secondary": {
    es: "Expertos en el mercado local",
    ca: "Experts en el mercat local",
    en: "Experts in the local market",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[locale] || entry["es"] || key;
}

export default translations;
