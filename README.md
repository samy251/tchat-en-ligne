# API Chat en Ligne

Cette API permet de gérer un chat en ligne avec un backend utilisant Express et MongoDB. Elle expose des routes pour récupérer les logs des messages et supprimer un log par ID.

## Endpoints

### `GET /logs`
- **Description** : Récupère tous les logs des messages du chat en ligne.
- **Méthode** : GET
- **URL** : `/logs`
- **Réponse** : Un tableau JSON contenant tous les logs des messages.
  
  Exemple de réponse :
  ```json
  [
    {
      "id": "1",
      "name": "Utilisateur",
      "message": "Message d'exemple",
      "date": "14/03/2025",
      "heure": "11:17:00"
    },
    ...
  ]
