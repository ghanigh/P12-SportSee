// Récupère les données des sessions pour l'utilisateur avec l'identifiant 123456 depuis l'API.
const sessions = await getSessions(123456);

// Effectue une requête GET à l'API pour récupérer les données des sessions pour l'utilisateur avec l'identifiant 123456.
// Traite les données des sessions une fois qu'elles sont récupérées.
getSessions(123456).then(sessions => {
  // ...
});

class MyComponent extends React.Component {
  // Appele le constructeur de la classe parente, `React.Component`.
  constructor(props) {
    super(props);
  }

  // Appelé après que le composant est monté dans le DOM.
  componentDidMount() {
    // Effectue une requête GET à l'API pour récupérer les données des sessions pour l'utilisateur avec l'identifiant 123456.
    // Stocke les données des sessions récupérées dans la propriété `this.sessions`.
    getSessions(123456).then(sessions => {
      this.sessions = sessions;
    });
  }

  // Appelé pour rendre l'interface utilisateur pour le composant `MyComponent`.
  render() {
    // Retourne le code JSX qui sera utilisé pour rendre l'interface utilisateur.
    return (
      <div>
        // Affiche les données des sessions si elles sont disponibles.
        {this.sessions ? (
          <div>
            {this.sessions.map(session => (
              <p key={session.id}>{session.date}</p>
            ))}
          </div>
        ) : (
          <div>Chargement...</div>
        )}
      </div>
    );
  }
}
