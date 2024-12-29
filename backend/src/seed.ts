import { dataSource } from "./config/db";
import { Article } from "./entities/article";
import { Food } from "./entities/food";

export const foods = [
  {
    name: "La bouillabaisse",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description:
      "La célèbre recette de bouillabaisse, un plat typiquement français. ",
    imgUrl:
      "https://cdn.shoplightspeed.com/shops/639663/files/48972500/800x1067x3/trek-slash-7-deore-xt-velo-de-montagne-double-susp.jpg",
    price: 50,
  },
  {
    name: "Bœuf bourguignon",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Ce plat est le plat français par excellence.",
    imgUrl: "https://www.demotivateur.fr/uploads/917/boeuf%20bourguignon.jpg",
    price: 90,
  },
  {
    name: "La fondue Savoyarde",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description:
      "La fondue Savoyarde est l'une des meilleures spécialités française.",
    imgUrl: "https://www.demotivateur.fr/uploads/917/fondue.jpg",
    price: 40,
  },
  {
    name: "L'aligot",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Ce plat est l'une des meilleures recettes française.",
    imgUrl: "https://www.demotivateur.fr/uploads/917/aligot.jpg",
    price: 40,
  },
  {
    name: "Le croque-monsieur gratiné au four",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Cette recette très simple est adorée par les Français.",
    imgUrl: "https://www.demotivateur.fr/uploads/917/croque%20monsieur.jpg",
    price: 30,
  },
  {
    name: "Coq au Vin ",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Plat traditionnelle et Gastronomique Française.",
    imgUrl:
      "https://www.1001recettes.net/wp-content/uploads/2024/09/1724370309_coq-au-vin-recette-traditionnelle-et-gastronomique-francaise.jpg",
    price: 100,
  },
  {
    name: "Magret de canard",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Magret de canard et pomme de terre sarladaise.",
    imgUrl:
      "https://www.demotivateur.fr/images-buzz/106320/magret-de-canard-pomme-de-terre.jpg",
    price: 75,
  },
  {
    name: "Tomates Farcies",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description:
      "Il y a des plats qui ne vieillissent pas. Pour assurer un repas de famille ou un dîner entre amis, certaines recettes sont incontournable.",
    imgUrl:
      "https://img.cuisineaz.com/960x504/2016/01/30/i76542-tomates-farcies-aux-steaks-haches.webp",
    price: 32,
  },
  {
    name: "Saint Jeacques",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description:
      "Il y a des plats qui ne vieillissent pas. Pour assurer un repas de famille ou un dîner entre amis, certaines recettes sont incontournable.",
    imgUrl:
      "https://resize.elle.fr/article/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/menu-gastronomique/88780110-1-fre-FR/Comment-faire-un-menu-gastronomique.jpg",
    price: 150,
  },
  {
    name: "Champignon au fruit de mer",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Spécialité de la maison",
    imgUrl:
      "https://www.lacid.fr/wp-content/uploads/2022/05/histoire-de-la-gastronomie-francaise.jpg",
    price: 120,
  },
  {
    name: "Magret à la sauce maison",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Ce plat est très prisé apr nos meilleurs clients",
    imgUrl:
      "https://aloha.fr/wp-content/uploads/2019/02/gastronomie-francaise.jpg",
    price: 120,
  },
  {
    name: "Vaud spécial",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description: "Kayak stable pour les sorties en mer.",
    imgUrl:
      "https://www.arts-et-gastronomie.com/wp-content/webp-express/webp-images/uploads/2022/07/Longe-de-veau-e1666340672896-600x600.jpg.webp",
    price: 100,
  },
  {
    name: "Filet mignon de veau",
    code: "FR",
    emoji:
      "https://img.freepik.com/vecteurs-libre/icone-drapeau-france-coeur_1308-125886.jpg?t=st=1733943621~exp=1733947221~hmac=cb8cf227291ae97a58ed682171198fe64ab2cf41810ba9c8aa9dc8ebb4866326&w=1380",
    continent: "Europe",
    description:
      "Filet mignon de veau en croûte de bacon et noisettes. excellent pour les papilles.",
    imgUrl:
      "https://www.arts-et-gastronomie.com/wp-content/webp-express/webp-images/uploads/2021/12/Filet-mignon-de-veau-600x600.jpg.webp",
    price: 140,
  },
];

const seedDatabase = async () => {
  await dataSource.initialize();
  const savedFoods = await dataSource.getRepository(Food).save(
    foods.map((food) => ({
      ...food,
      price: food.price.toString(), // Convertir price en string ici
    }))
  );

  const articles = [
    { food: savedFoods[0] },
    { food: savedFoods[0] },
    { food: savedFoods[1] },
    { food: savedFoods[2] },
    { food: savedFoods[2] },
    { food: savedFoods[3] },
    { food: savedFoods[4] },
    { food: savedFoods[5] },
    { food: savedFoods[6] },
    { food: savedFoods[7] },
    { food: savedFoods[8] },
    { food: savedFoods[9] },
    { food: savedFoods[10] },
    { food: savedFoods[11] },
    { food: savedFoods[12] },
    { food: savedFoods[13] },
    { food: savedFoods[14] },
    { food: savedFoods[15] },
    { food: savedFoods[16] },
    { food: savedFoods[17] },
    { food: savedFoods[18] },
  ];

  await dataSource.getRepository(Article).save(articles);

  console.log("Données insérées avec succès !");
  await dataSource.destroy();
};

seedDatabase().catch(console.error);
