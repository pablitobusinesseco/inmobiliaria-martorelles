# Brainstorm de Diseño — Inmobiliaria Martorelles

---

<response>
<text>

## Idea 1: "Arquitectura Mediterránea Contemporánea"

**Movimiento de diseño:** Minimalismo mediterráneo — inspirado en la arquitectura blanca del Mediterráneo con acentos orgánicos y naturales, evocando la calidez del Vallès Oriental.

**Principios fundamentales:**
1. Espacios amplios y respirables que transmiten lujo sin ostentación
2. Materialidad digital: texturas sutiles que evocan piedra, madera y vegetación
3. Jerarquía visual clara con ritmo asimétrico
4. Fotografía como protagonista, enmarcada por geometría limpia

**Filosofía del color:**
- Verde bosque (#1B5E3A) como ancla de confianza y naturaleza — usado en header, CTAs y acentos
- Blanco cálido (#FAFAF7) como fondo principal — evoca luminosidad mediterránea
- Arena/beige (#F0EBE3) para secciones alternas — calidez sin saturación
- Cobre/terracota (#C87533) como acento secundario — conexión con la tierra
- Grafito (#2D2D2D) para texto principal — legibilidad sin dureza

**Paradigma de layout:**
- Estructura asimétrica con columnas desiguales (60/40, 70/30)
- Secciones full-width alternadas con contenido contenido
- Hero con imagen a sangre completa y overlay con gradiente verde
- Grid de propiedades con tarjetas de proporción áurea
- Secciones con bordes diagonales sutiles (clip-path) para romper la monotonía

**Elementos firma:**
1. Líneas decorativas finas en cobre que actúan como separadores orgánicos
2. Esquinas redondeadas asimétricas en tarjetas (más redondeada arriba-izquierda)
3. Iconografía lineal personalizada con trazo fino en verde

**Filosofía de interacción:**
- Hover en tarjetas: elevación suave con sombra expandida + zoom sutil de imagen
- Navegación: aparece/desaparece con scroll, fondo blur al hacer scroll
- Botones: transición de fondo con barrido lateral

**Animación:**
- Entrada de secciones con fade-up escalonado (stagger 100ms entre elementos)
- Parallax suave en hero (velocidad 0.3)
- Counter animado para estadísticas
- Imágenes con reveal de izquierda a derecha

**Sistema tipográfico:**
- Títulos: "Playfair Display" (serif elegante) — pesos 500 y 700
- Cuerpo: "DM Sans" (geométrica moderna) — pesos 400 y 500
- Subtítulos/labels: "DM Sans" en mayúsculas con letter-spacing amplio

</text>
<probability>0.08</probability>
</response>

---

<response>
<text>

## Idea 2: "Swiss Precision meets Iberian Warmth"

**Movimiento de diseño:** Neo-brutalismo suavizado — estructura rígida suiza con calidez ibérica. Grid estricto pero con detalles orgánicos.

**Principios fundamentales:**
1. Grid modular de 12 columnas como esqueleto inamovible
2. Tipografía como elemento arquitectónico (títulos grandes, impactantes)
3. Contraste dramático entre secciones claras y oscuras
4. Datos y números como elemento visual protagonista

**Filosofía del color:**
- Verde profundo (#0D3B2E) para secciones hero y de impacto — casi negro-verde
- Blanco puro (#FFFFFF) para contraste máximo
- Amarillo mostaza (#D4A843) como acento energético
- Gris claro (#F5F5F5) para fondos neutros

**Paradigma de layout:**
- Secciones alternas dark/light a pantalla completa
- Títulos enormes (clamp 4rem-8rem) que rompen el grid intencionalmente
- Tarjetas de propiedades en masonry layout
- Footer monumental con mapa integrado

**Elementos firma:**
1. Números estadísticos gigantes con opacidad reducida como fondo decorativo
2. Bordes gruesos (3px) en verde como marcos de contenido
3. Cursor personalizado circular que sigue al mouse

**Filosofía de interacción:**
- Transiciones de página con wipe horizontal
- Hover con inversión de colores (verde→blanco, blanco→verde)
- Scroll horizontal para galería de propiedades

**Animación:**
- Texto que se revela letra por letra en títulos principales
- Secciones que se deslizan desde los laterales
- Morphing de formas SVG en transiciones
- Scroll-triggered con IntersectionObserver

**Sistema tipográfico:**
- Títulos: "Space Grotesk" (geométrica con carácter) — peso 700
- Cuerpo: "Inter" — peso 400
- Acentos: "Space Grotesk" condensada en mayúsculas

</text>
<probability>0.04</probability>
</response>

---

<response>
<text>

## Idea 3: "Luxury Editorial Inmobiliario"

**Movimiento de diseño:** Editorial de lujo — inspirado en revistas de arquitectura premium como Architectural Digest y catálogos inmobiliarios de alta gama.

**Principios fundamentales:**
1. Fotografía cinematográfica como columna vertebral del diseño
2. Tipografía serif refinada que evoca tradición y solidez
3. Espaciado generoso que comunica exclusividad
4. Microinteracciones elegantes que premian la exploración

**Filosofía del color:**
- Verde salvia (#2E6B4F) como color institucional — sofisticado y natural
- Crema (#FAF8F5) como fondo editorial — más cálido que el blanco puro
- Cobre antiguo (#B8845C) para detalles y líneas decorativas
- Negro suave (#1A1A1A) para texto y secciones de contraste
- Verde claro (#E8F0EB) para fondos de tarjetas y hover states

**Paradigma de layout:**
- Layout editorial con columnas asimétricas y márgenes amplios
- Hero de pantalla completa con imagen cinematográfica y texto centrado elegante
- Secciones de servicios con layout de revista (imagen grande + texto lateral)
- Propiedades en grid limpio con hover revelador
- Testimonios con diseño de cita editorial (comillas grandes decorativas)

**Elementos firma:**
1. Líneas horizontales finas en cobre como separadores editoriales
2. Comillas decorativas serif gigantes en sección de testimonios
3. Badge/etiqueta verde con esquinas redondeadas para categorías

**Filosofía de interacción:**
- Hover en propiedades: overlay verde translúcido con detalles que aparecen
- Navegación sticky que se minimiza elegantemente al hacer scroll
- Botones con borde que se rellena al hover (outline → filled)
- Imágenes con zoom suave al hover (scale 1.05)

**Animación:**
- Fade-in + translate-up para contenido al entrar en viewport (suave, 600ms)
- Parallax sutil en imágenes hero (factor 0.15)
- Números que cuentan hacia arriba en la sección de estadísticas
- Líneas decorativas que se dibujan progresivamente
- Stagger animation en grid de propiedades (delay incremental)

**Sistema tipográfico:**
- Títulos: "Cormorant Garamond" (serif clásica refinada) — pesos 500 y 600
- Cuerpo: "Outfit" (sans-serif moderna y limpia) — pesos 300, 400 y 500
- Labels/subtítulos: "Outfit" en mayúsculas, letter-spacing 0.15em, peso 500
- Tamaños: h1 clamp(2.5rem, 5vw, 4rem), h2 clamp(1.8rem, 3vw, 2.5rem)

</text>
<probability>0.07</probability>
</response>

---

## Decisión

Se selecciona la **Idea 3: "Luxury Editorial Inmobiliario"** por su alineación perfecta con el objetivo de crear una web profesional y premium para una agencia inmobiliaria. El enfoque editorial transmite exclusividad y confianza, mientras que la paleta de verde salvia y crema conecta directamente con la identidad de marca de Inmobiliaria Martorelles. La combinación de Cormorant Garamond + Outfit ofrece un contraste tipográfico sofisticado que diferencia la web de competidores genéricos.
