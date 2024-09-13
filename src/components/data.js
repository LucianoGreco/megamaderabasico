// Importación de imágenes de banners
import banner1 from '../assets/BannerDiseño.jpeg';
import banner2 from '../assets/BannerNovedad.png';
import banner3 from '../assets/BannerHerrajes.png';
import banner4 from '../assets/BannerServicio.png';
import banner5 from '../assets/BannerMelamina.png';
import banner6 from '../assets/BannerEnvios.png';
// Importación de la imagen del logo
import logo from '../assets/Logo.png'; // Puedes cambiar esta ruta para modificar la imagen del logo
// Importación de la imagen de fondo body
import fondo from '../assets/Image11.jpeg'; // Puedes cambiar esta ruta para modificar la imagen del logo

// Exportar la imagen de fondo
export const backgroundImage = fondo;


// Datos del carrusel con un marcador especial para reemplazar con la imagen del logo y espacios no rompibles
export const mensajeSlider = [
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{logo}EGA{logo}ADERA",
];

// Exportar la imagen del logo
export const logoImage = logo;


// Títulos de las secciones
export const titulos = [
  "DISEÑOS",
  "NOVEDADES",
  "HERRAJES",
  "SERVICIO",
  "MELAMINAS",
  "ENVIOS"
];

// Banners correspondientes a cada sección
export const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6
];

// Tipos de melamina disponibles
export const tiposMelamina = [
  "Blanca",
  "Texturada",
  "Brillante",
  "Mate",
  "Decorativa",
  "Con Bordes ABS",
  "Hidrófuga",
  "Ignífuga",
  "Alta Densidad"
];

// Modelos de melamina con descripciones
export const modelosMelamina = [
  { Modelo: "Roble", Descripcion: "Imitación del roble, con tonos marrón claro o grisáceo." },
  { Modelo: "Cedro", Descripcion: "Imitación de la madera de cedro, con tonos rojizos o marrones oscuros." },
  { Modelo: "Nogal", Descripcion: "Tonos marrones oscuros con vetas características." },
  { Modelo: "Cerezo", Descripcion: "Madera rojiza con un acabado elegante." },
  { Modelo: "Wengué", Descripcion: "Color oscuro casi negro, muy usado en diseños modernos." },
  { Modelo: "Haya", Descripcion: "Tonos suaves de madera clara, generalmente beige o marrón claro." },
  { Modelo: "Pino", Descripcion: "Madera clara, con tonalidades amarillentas y vetas sutiles." },
  { Modelo: "Ébano", Descripcion: "Madera oscura, con tonalidades profundas." },
  { Modelo: "Blanco", Descripcion: "Muy común, ideal para muebles minimalistas y contemporáneos." },
  { Modelo: "Negro", Descripcion: "Elegante y sobrio, usado en ambientes modernos." },
  { Modelo: "Gris claro", Descripcion: "Neutro, versátil para combinar con otros tonos." },
  { Modelo: "Gris oscuro", Descripcion: "Para ambientes más serios o industriales." },
  { Modelo: "Beige", Descripcion: "Ideal para crear ambientes cálidos y acogedores." },
  { Modelo: "Marrón chocolate", Descripcion: "Un color cálido y profundo." },
  { Modelo: "Crema", Descripcion: "Un tono suave, entre el blanco y el beige." },
  { Modelo: "Rojo", Descripcion: "Para dar un toque llamativo y moderno." },
  { Modelo: "Azul", Descripcion: "Desde tonos claros como el azul cielo, hasta más oscuros como el azul marino." },
  { Modelo: "Verde oliva", Descripcion: "Un color elegante, ideal para combinaciones sobrias." },
  { Modelo: "Amarillo mostaza", Descripcion: "Un toque vibrante para ambientes modernos." },
  { Modelo: "Naranja", Descripcion: "Perfecto para diseños atrevidos." },
  { Modelo: "Aluminio", Descripcion: "Un gris metálico que da un aspecto industrial o moderno." },
  { Modelo: "Cobre", Descripcion: "Con tonalidades brillantes, ideal para toques elegantes." },
  { Modelo: "Bronce", Descripcion: "Un color cálido, similar al cobre, pero más oscuro." },
  { Modelo: "Acero inoxidable", Descripcion: "Un acabado metálico pulido que da un toque sofisticado." },
  { Modelo: "Textura tipo piedra", Descripcion: "Colores que imitan el mármol o granito." },
  { Modelo: "Textura rústica", Descripcion: "Imitan el acabado rugoso o envejecido de algunas maderas o piedras." },
  { Modelo: "Textura de lino", Descripcion: "Un acabado con relieve que simula la textura de la tela." }
];

// Datos para las tarjetas grandes y pequeñas
export const cardDataBox = [
  { image1: banners[0], text: titulos[0], button: "Ver Más" },
  { image1: banners[4], text: titulos[4], button: "Explorar" }
];

export const cardDataMiniBox = [
  { image1: banners[1], text: titulos[1], button: "Descubrir" },
  { image1: banners[2], text: titulos[2], button: "Detalles" },
  { image1: banners[3], text: titulos[3], button: "Servicios" },
  { image1: banners[5], text: titulos[5], button: "Más Info" }
];
