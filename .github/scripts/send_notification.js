const admin = require("firebase-admin");

const serviceAccount = require("../../firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: {
    title: "Mise à jour Bondeko",
    body: "Nouvelle donnée disponible",
  },

  data: {
    action: "sync",
  },

  topic: "bondeko_updates",
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Notification envoyée :", response);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
