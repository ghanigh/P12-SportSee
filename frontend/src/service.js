const sessions = await getSessions(123456);

getSessions(123456).then(sessions => {
  // Faire quelque chose avec les données des sessions
});

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.sessions = null;
  }

  componentDidMount() {
    getSessions(123456).then(sessions => {
      this.sessions = sessions;
    });
  }

  render() {
    return (
      <div>
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
