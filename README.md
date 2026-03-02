# ⛽ GPL Navigator

Application Android de navigation GPL avec Mode Tesla.  
Prix en temps réel depuis l'API officielle du gouvernement français.

---

## 🚀 Installation (15 minutes)

### Étape 1 : Installer Node.js
1. Aller sur https://nodejs.org
2. Télécharger la version **LTS** (la verte)
3. L'installer normalement (tout par défaut)
4. Redémarrer le PC

### Étape 2 : Installer Expo Go sur ton téléphone
- Ouvrir le **Play Store** sur ton Android
- Chercher "**Expo Go**" (logo blanc/noir)
- Installer l'app

### Étape 3 : Lancer l'application
1. Ouvrir **l'Invite de commandes** (touche Windows > taper "cmd")
2. Aller dans le dossier du projet :
   ```
   cd chemin\vers\GPLNavigator
   ```
3. Installer les dépendances (une seule fois) :
   ```
   npm install
   ```
4. Lancer l'app :
   ```
   npx expo start
   ```
5. Un **QR code** apparaît dans le terminal
6. Sur ton téléphone : ouvrir l'app **Expo Go** et scanner le QR code

✅ L'app s'ouvre sur ton téléphone !

---

## 📱 Fonctionnalités

### Onglet "Carte"
- Carte temps réel des stations GPL dans un rayon de 15km
- Prix triés du moins cher au plus cher
- Badge vert = station la moins chère
- Tirer vers le bas pour actualiser
- Prix mis à jour toutes les 10 min (source gouvernementale)

### Onglet "Mode Tesla"
1. Saisir ta destination
2. Régler ton niveau de carburant actuel
3. Appuyer sur "Planifier le trajet"
4. L'app calcule :
   - Ton itinéraire complet
   - Les stations GPL sur ta route
   - Les arrêts optimaux (moins chers + positionnés stratégiquement)
   - Le coût total en carburant
   - Les économies réalisées

### Onglet "Paramètres"
- Configurer ton véhicule (consommation, capacité réservoir)
- Voir l'autonomie estimée

---

## ⚙️ Tes paramètres par défaut
- Consommation : **8 L/100km** (berline)
- Réservoir : **40 L**
- Autonomie utile : ~420 km

> Tu peux modifier ces valeurs dans l'onglet Paramètres.

---

## 🔧 Dépannage

**"npm n'est pas reconnu"** → Node.js n'est pas installé ou il faut redémarrer le PC

**"Expo Go ne se connecte pas"** → Vérifie que le PC et le téléphone sont sur le **même réseau Wi-Fi**

**"Aucune station trouvée"** → L'app cherche dans un rayon de 15km. Si tu es en zone rurale, il n'y a peut-être pas de station GPL proche.

**L'app est lente au premier lancement** → Normal, les données se chargent. Les suivants seront plus rapides.

---

## 📡 Sources de données

| Service | URL | Gratuit |
|---------|-----|---------|
| Prix carburants | data.economie.gouv.fr | ✅ |
| Itinéraires | router.project-osrm.org (OpenStreetMap) | ✅ |
| Recherche adresses | nominatim.openstreetmap.org | ✅ |

**Aucune clé API requise. 100% gratuit.**

---

## 🛠️ Pour aller plus loin

Si tu veux compiler l'app en .APK autonome (sans Expo Go) :
```
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```
Cela crée un fichier .APK téléchargeable directement sur ton téléphone.
Nécessite un compte Expo gratuit sur https://expo.dev
