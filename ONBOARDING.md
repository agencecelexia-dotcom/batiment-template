# Deployer un nouveau client batiment

## Etape 1 — Dupliquer le repo

```bash
git clone https://github.com/agencecelexia-dotcom/batiment-template nouveau-batiment-[ville]
cd nouveau-batiment-[ville]
npm install
```

## Etape 2 — Remplir CLIENT.md via IA

Donne ce prompt a Claude (ou ChatGPT) :

> Voici le brief de mon client entreprise de batiment : [colle le brief ici].
> Remplis CLIENT.md en suivant exactement le format existant.
> Chaque champ doit etre rempli ou laisser "" si inconnu.
> Ne modifie aucun autre fichier que CLIENT.md.

## Etape 3 — Synchroniser

```bash
npm run sync-client
npm run dev
# Verifier sur http://localhost:3000
```

## Etape 4 — Deployer

```bash
git add .
git commit -m "client: [NOM_ENTREPRISE] — [VILLE]"
git push origin main
# Auto-deploie sur Vercel
```

## Panel Admin

- **URL** : `https://[domaine]/admin`
- **Password** : valeur de `ADMIN_PASSWORD` dans `CLIENT.md` (par defaut : `1234`)

## Variables disponibles

| Section | Exemples de champs |
|---------|-------------------|
| Identite | Nom entreprise, dirigeant, genre |
| Contact | Telephone, email, adresse, ville, code postal |
| Horaires | Semaine, samedi, dimanche, urgence |
| Branding | Hue couleur primaire (30), hue couleur accent (145) |
| Reseaux | Facebook, Instagram, Google, domaine |
| Legal | SIRET, RGE, assurance decennale |
| Chiffres | Experience, chantiers, note Google, avis |
| Services | 6 services avec titre, descriptions, icone, slug |
| Temoignages | 10 temoignages avec nom, note, texte, date |
