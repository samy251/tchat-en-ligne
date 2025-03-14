// app.js
const express = require('express');
const mongoose = require('mongoose');

// Créer l'application Express
const app = express();
app.use(express.json()); // Pour pouvoir recevoir des données JSON dans les requêtes

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/tchat', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Schéma pour stocker les logs de messages dans MongoDB
const messageSchema = new mongoose.Schema({
  id: String,
  name: String,
  message: String,
  date: String,
  heure: String
});

const Message = mongoose.model('Message', messageSchema);

// Route GET pour récupérer tous les logs
app.get('/logs', async (req, res) => {
  try {
    const logs = await Message.find();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des logs' });
  }
});

// Route DELETE pour supprimer un log par ID
app.delete('/logs/:id', async (req, res) => {
  try {
    const logId = req.params.id;
    const deletedLog = await Message.findByIdAndDelete(logId);

    if (!deletedLog) {
      return res.status(404).json({ message: 'Log non trouvé' });
    }

    res.status(200).json({ message: 'Log supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression du log' });
  }
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
