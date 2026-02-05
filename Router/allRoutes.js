import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/pages/galerie.js"),
    new Route("/carte", "La carte", "/pages/carte.html", []),
    new Route("/login", "Connexion", "/pages/login.html", ["disconnected"], "/pages/login.js"),
    new Route("/signup", "Inscription", "/pages/signup.html", ["disconnected"], "/pages/signup.js"),
    new Route("/compte", "Mon compte", "/pages/compte.html", ["client", "admin"]),
    new Route("/editPassword", "Modifier le mot de passe", "/pages/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/reservation/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/reservation/reserver.html", ["client"], "/reservation/reserver.js"),
  
  
  
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";