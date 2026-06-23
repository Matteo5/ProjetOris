# Loopa — Site vitrine

Site marketing B2B pour **Loopa**, spécialiste de l'automatisation et de l'IA
pour les PME, artisans et indépendants en Normandie.

## Stack

- **[Astro](https://astro.build)** — génération statique (SSG)
- **[Tailwind CSS v4](https://tailwindcss.com)** — styles utilitaires
- **TypeScript** (mode strict)
- Polices : Sora (titres) + Nunito (corps)

## Démarrage

```sh
npm install
npm run dev        # serveur de dev sur http://localhost:4321
```

## Scripts

| Commande          | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement             |
| `npm run build`   | Build de production dans `./dist/`            |
| `npm run preview` | Prévisualise le build localement              |

## Structure

```
src/
├── pages/        # Pages (index, offres, à-propos, contact, légales)
├── components/   # Composants réutilisables (Header, Footer, cards…)
├── layouts/      # Layout principal (header/footer + SEO)
├── styles/       # Design system (variables, animations)
└── assets/       # Images SVG
public/
└── logos/        # Logos des technologies (marquee accueil)
```

## Déploiement

Déployé sur [Vercel](https://vercel.com). Tout push sur `main` redéploie automatiquement.
Astro statique est auto-détecté (build : `npm run build`, sortie : `dist`).

## Configuration

Les valeurs à personnaliser sont centralisées dans **`src/config.ts`** :

- `SITE_URL` — domaine de production (sitemap, canoniques, Open Graph). À synchroniser avec `site` dans `astro.config.mjs` et la ligne `Sitemap:` de `public/robots.txt`.
- `CALENDLY_URL` — lien Calendly des boutons « appel découverte ».

## À compléter avant mise en production

- [ ] `src/config.ts` : `SITE_URL` (domaine Vercel/perso réel) + `CALENDLY_URL` (vrai lien Calendly)
- [ ] Synchroniser le domaine dans `astro.config.mjs` et `public/robots.txt`
- [ ] Formulaire de contact : remplacer `YOUR_FORM_ID` (Formspree) dans `src/components/ContactForm.astro`
- [ ] Mentions légales : champs `[à compléter]` (SIRET, forme juridique, hébergeur…)
- [ ] Politique de confidentialité : durées de conservation, responsable de traitement
- [ ] Remplacer les témoignages et chiffres de démonstration par du contenu réel
- [ ] Activer Web Analytics dans le dashboard Vercel (onglet Analytics)
