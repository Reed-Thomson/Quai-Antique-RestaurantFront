import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/carte", "La carte", "/pages/carte.html"),
    new Route("/reservation", "Réservation", "/pages/reservation.html"),
    new Route("/compte", "Mon compte", "/pages/compte.html"),
    new Route("/login", "Connexion", "/pages/login.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
  
  
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";