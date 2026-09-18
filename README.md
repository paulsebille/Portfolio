# Portfolio — Paul Sebille

Portfolio Next.js avec :
- page d'accueil éditoriale
- filtres par catégorie
- cartes de projets cliquables
- pages détaillées par projet
- responsive mobile
- contenu centralisé dans `lib/projects.ts`

## Modifier le contenu

Le fichier principal à modifier est :

`lib/projects.ts`

Tu peux y ajouter, supprimer ou modifier les projets, catégories, textes et KPI.

## Ajouter tes images

Dépose tes images dans :

`public/images/`

Puis remplace les blocs `visual-placeholder` dans `ProjectsGrid.tsx` et les pages projet par des composants `Image` Next.js.

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Mise en ligne

Le dépôt peut ensuite être importé directement dans Vercel. Chaque nouveau commit GitHub pourra déclencher automatiquement un nouveau déploiement.

## Structure

- `app/` : pages du site
- `components/` : composants visuels
- `lib/projects.ts` : contenu des projets
- `public/images/` : photos et visuels
