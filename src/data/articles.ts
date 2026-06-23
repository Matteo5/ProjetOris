/*
 * Articles de la rubrique Ressources.
 * Pour ajouter un article : ajouter une entrée ici. Le corps `body` accepte du HTML simple.
 */
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO — sert au tri et à l'affichage
  readingTime: string;
  category: string;
  body: string;        // HTML
}

export const articles: Article[] = [
  {
    slug: 'site-vitrine-tpe-pourquoi-comment',
    title: 'Site vitrine pour TPE : pourquoi (et comment) bien le faire',
    excerpt:
      'Un site lent ou daté fait fuir vos clients avant même le premier contact. Voici ce qui compte vraiment pour une petite entreprise.',
    date: '2026-06-22',
    readingTime: '5 min',
    category: 'Site web',
    body: `
      <p>Aujourd'hui, votre site est souvent le premier contact qu'un client a avec vous — avant même un appel. En quelques secondes, il se fait une opinion. Un site lent, daté ou illisible sur mobile, et il part voir ailleurs. La bonne nouvelle : un site vitrine efficace n'a pas besoin d'être compliqué.</p>
      <h2>1. La vitesse, ça change tout</h2>
      <p>Plus de la moitié des visiteurs quittent une page qui met plus de trois secondes à charger. Un site rapide retient l'attention, rassure, et plaît à Google — qui favorise les sites performants dans ses résultats.</p>
      <h2>2. Être trouvé sur Google</h2>
      <p>Un beau site invisible ne sert à rien. Quelques fondations de référencement (titres clairs, descriptions, structure propre, balises de partage) suffisent à apparaître sur les recherches de votre métier et de votre région.</p>
      <h2>3. L'essentiel, bien présenté</h2>
      <p>Qui vous êtes, ce que vous proposez, vos réalisations, et un moyen simple de vous contacter. Pas besoin de dix pages : une vitrine claire et soignée convertit mieux qu'un site touffu.</p>
      <p><strong>À retenir :</strong> rapide, visible sur Google, impeccable sur mobile, et un bouton de contact qui marche. Le reste est du bonus.</p>
    `,
  },
  {
    slug: 'automatiser-prise-rendez-vous',
    title: 'Ne perdez plus de clients faute de réponse : automatisez vos rendez-vous',
    excerpt:
      'Un prospect qui ne peut pas réserver tout de suite va voir ailleurs. Comment fluidifier la prise de rendez-vous sans y penser.',
    date: '2026-06-18',
    readingTime: '4 min',
    category: 'Automatisation',
    body: `
      <p>Combien de clients potentiels perdez-vous parce qu'ils vous appellent pendant que vous êtes occupé, et ne rappellent jamais ? Pour beaucoup d'artisans et d'indépendants, la prise de rendez-vous est un vrai point de fuite. Elle s'automatise facilement.</p>
      <h2>Laisser le client réserver lui-même</h2>
      <p>Un lien de réservation en ligne, relié à votre agenda, permet à un prospect de choisir un créneau libre à toute heure — même le soir ou le week-end, quand vous ne pouvez pas décrocher.</p>
      <h2>Confirmer et rappeler automatiquement</h2>
      <p>Une fois le rendez-vous pris, un email et un SMS de confirmation partent tout seuls, suivis d'un rappel la veille. Résultat : moins de rendez-vous oubliés, moins de trous dans votre planning.</p>
      <h2>Tout reste centralisé</h2>
      <p>Chaque réservation s'ajoute à votre agenda et, si besoin, crée une fiche client. Vous gardez une vue d'ensemble sans rien saisir à la main.</p>
      <p><strong>Le gain :</strong> vous captez les demandes 24h/24 et vous arrêtez de jouer au ping-pong téléphonique.</p>
    `,
  },
  {
    slug: 'automatiser-relances-factures',
    title: 'Automatiser ses relances de factures : par où commencer ?',
    excerpt:
      'Les impayés plombent la trésorerie des TPE. Voici comment mettre en place des relances automatiques, sans y passer vos soirées.',
    date: '2026-06-10',
    readingTime: '5 min',
    category: 'Automatisation',
    body: `
      <p>Pour une petite entreprise, chaque facture impayée pèse directement sur la trésorerie. Pourtant, relancer manuellement chaque client est chronophage et souvent repoussé. La bonne nouvelle : ce processus se prête parfaitement à l'automatisation.</p>
      <h2>1. Cartographier votre cycle de facturation</h2>
      <p>Avant d'automatiser quoi que ce soit, listez les étapes : émission de la facture, échéance, première relance, deuxième relance, mise en demeure. Notez les délais que vous appliquez réellement.</p>
      <h2>2. Choisir un déclencheur fiable</h2>
      <p>Le déclencheur le plus simple est la date d'échéance. Un outil comme n8n ou Make peut surveiller votre logiciel de facturation et lancer une relance par email automatiquement à J+3, J+10 puis J+20.</p>
      <h2>3. Garder une touche humaine</h2>
      <p>Personnalisez chaque message avec le prénom du client, le numéro de facture et le montant dû. Une relance automatique bien rédigée reste courtoise et professionnelle — vos clients n'y verront que du feu.</p>
      <p><strong>Résultat typique :</strong> 2 heures gagnées par semaine et un délai de paiement moyen réduit de plusieurs jours.</p>
    `,
  },
  {
    slug: 'ia-tri-documents-comptables',
    title: 'L\'IA au service du tri de vos documents comptables',
    excerpt:
      'Factures, notes de frais, justificatifs… L\'intelligence artificielle peut classer et extraire vos données en quelques secondes.',
    date: '2026-05-28',
    readingTime: '4 min',
    category: 'Intelligence artificielle',
    body: `
      <p>Le classement des documents comptables est l'une des tâches les plus rébarbatives — et les plus sujettes aux erreurs. Les modèles d'IA actuels savent lire un document, en extraire les informations clés et le ranger automatiquement.</p>
      <h2>Ce que l'IA sait faire aujourd'hui</h2>
      <ul>
        <li>Reconnaître le type de document (facture, devis, relevé…)</li>
        <li>Extraire montant, date, fournisseur et numéro de TVA</li>
        <li>Renommer et classer le fichier dans le bon dossier</li>
      </ul>
      <h2>Toujours sous votre contrôle</h2>
      <p>Chez Snodo, nous déployons des outils IA <em>supervisés</em> : vous gardez la main sur les cas ambigus et validez avant intégration dans votre comptabilité. L'IA accélère, elle ne décide pas à votre place.</p>
      <p>En pratique, un expert-comptable peut diviser par dix le temps consacré au tri, et se concentrer sur le conseil à forte valeur ajoutée.</p>
    `,
  },
  {
    slug: 'demystifier-automatisation-tpe',
    title: 'Automatisation : 3 idées reçues qui freinent les TPE',
    excerpt:
      '« C\'est trop cher », « trop technique », « pas pour mon métier ». Démêlons le vrai du faux.',
    date: '2026-05-15',
    readingTime: '6 min',
    category: 'Conseil',
    body: `
      <p>Beaucoup de dirigeants de TPE pensent que l'automatisation est réservée aux grandes entreprises. C'est une erreur qui coûte cher en temps perdu. Voici trois idées reçues à déconstruire.</p>
      <h2>« C'est trop cher »</h2>
      <p>La plupart des automatisations utiles reposent sur des outils peu coûteux, voire gratuits jusqu'à un certain volume. Le vrai calcul à faire : combien d'heures par mois passez-vous sur des tâches répétitives ?</p>
      <h2>« C'est trop technique »</h2>
      <p>Vous n'avez pas besoin de coder. Un accompagnement de quelques jours suffit à mettre en place les premiers flux, puis à former vos équipes pour qu'elles soient autonomes.</p>
      <h2>« Ce n'est pas pour mon métier »</h2>
      <p>Artisan, profession libérale, commerçant : tous ont des tâches automatisables (devis, planning, relances, suivi client). La clé est d'identifier les bons points de départ — c'est précisément l'objet de notre audit gratuit.</p>
      <p><strong>À retenir :</strong> commencez petit, mesurez le temps gagné, puis étendez. L'automatisation est un chemin progressif, pas une révolution.</p>
    `,
  },
];

export const categoryColors: Record<string, string> = {
  'Automatisation': 'var(--color-cta)',
  'Intelligence artificielle': 'var(--color-accent)',
  'Conseil': 'var(--color-gold)',
  'Site web': '#10B981',
};
