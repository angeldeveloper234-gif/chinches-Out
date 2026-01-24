/**
 * ARCHIVO DE RESEÑAS DE GOOGLE (Manual)
 * -----------------------------------------------------
 * INSTRUCCIONES:
 * Para agregar una nueva reseña, simplemente copia y pega el bloque entre llaves {}
 * y reemplaza los datos. 
 * 
 * CAMPOS:
 * - id: Un número o texto único.
 * - author_name: Nombre del cliente.
 * - rating: Número de estrellas (1 al 5).
 * - text: El comentario del cliente.
 * - time: Texto de fecha (ej: "hace 1 semana").
 * - profile_photo_url: Link a la foto.
 * 
 * NOTA: Después de guardar este archivo, debes hacer DEPLOY para que se vean los cambios.
 */

export interface GoogleReview {
    id: string;
    author_name: string;
    author_url: string;
    rating: number;
    text: string;
    profile_photo_url: string;
    time: string;
}

export const GOOGLE_REVIEWS_MOCK: GoogleReview[] = [
    {
        id: "mario-flota",
        author_name: "MARIO ARTURO FLOTA",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio! Ofreciendome el servico acorde a lo que necesitaba y abordaron cada espacio de mi casa",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjU7at3-XN7o-hFzTDA9pQbHNK2Rf8QeMRJfEvZtVf2SYUv9dGdI=w32-h32-p-rp-mo-ba3-br100",
        time: "Hace 7 meses"
    },
    {
        id: "juan-palma",
        author_name: "juan Palma “Burrito”",
        author_url: "#",
        rating: 5,
        text: "Exelente servicio muy puntuales y profesionales en el servicio",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUafJvlghY4ALMTMqdIjRves-F3Ejmzxao8-x1lP813Kyg-0PQE=w32-h32-p-rp-mo-ba5-br100",
        time: "Hace 7 meses"
    },
    {
        id: "ana-aguilar",
        author_name: "Ana María Aguilar Moo",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio , muy bien trato",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLj_IPeStrrwvSYNJFBK0GVyFCnyaRPwtzwinxdwZ4C6L7y=w32-h32-p-rp-mo-br100",
        time: "Hace 7 meses"
    },
    {
        id: "delmy-cetz",
        author_name: "Delmy Cetz",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio, 100% recomendado.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWYu3XmF3t1f1bTHZaW3L9YF5HPiAJ__MBWh1HnhuccIEH5rvQW=w32-h32-p-rp-mo-br100",
        time: "Hace 7 meses"
    },
    {
        id: "mendoza-mezquita",
        author_name: "Mendoza Mézquita Raul Alejandro",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio a un muy buen precio",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWTJauhuXy1Kgv1owFKh6XLWIFfheIK1QSL00_z60r2SoYYSUo=w32-h32-p-rp-mo-ba4-br100",
        time: "Hace 7 meses"
    },
    {
        id: "gustavo-pedraza",
        author_name: "Gustavo Pedraza",
        author_url: "#",
        rating: 5,
        text: "Empresa responsable que en todo momento me explico el proceso y me garantizo su resultado. 10/10",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWsIXcMn9JPExu3iBm9SZfktzy4AlouSCaix_UyHVhUI6z97kICCQ=w32-h32-p-rp-mo-br100",
        time: "Hace 7 meses"
    },
    {
        id: "abril-bojorquez",
        author_name: "Abril Bojorquez",
        author_url: "#",
        rating: 5,
        text: "Los recomiendo ampliamente.",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJi3ofzLk-DkvHw77ZF89Tusuk5vJACwmXKdIGcl4UQokdmjQ=w32-h32-p-rp-mo-br100",
        time: "Hace 7 meses"
    },
    {
        id: "oswaldo-benitez",
        author_name: "Oswaldo Benitez",
        author_url: "#",
        rating: 5,
        text: "",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVIzKVsZ4ZB_CJaolV4RRjUFDn48MdebMS_BR-Ui_brBdOmJqo=w32-h32-p-rp-mo-br100",
        time: "Hace 1 mes"
    },
    {
        id: "celia-novelo",
        author_name: "Celia Guadalype Novelo",
        author_url: "#",
        rating: 5,
        text: "",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVb-y6pi8LBprqh7_JQoW5x7aFLMYNpWxuqiLy6Si6ltQTGiYXJ=w32-h32-p-rp-mo-br100",
        time: "Hace 7 meses"
    },
    {
        id: "victor",
        author_name: "Victor",
        author_url: "#",
        rating: 5,
        text: "",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIjSIipo679D8woMjyJAzbypAx9jOzc2E-guqyWqGtfpke9EQ=w32-h32-p-rp-mo-ba3-br100",
        time: "Hace 7 meses"
    },
    {
        id: "ileaba-perez",
        author_name: "Ileaba Perez",
        author_url: "#",
        rating: 5,
        text: "",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUXI7Bcy2C4u77SWHQYmb8NQzI8z-uh_G3Q1-Kl7k0B6iSss2pHCA=w32-h32-p-rp-mo-ba3-br100",
        time: "Hace 7 meses"
    }
];
