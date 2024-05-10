import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="TitelScreen">
          <h1>Cyberversicherung</h1>
          <h3>Versicherung abschliessen in 3 einfachen Schritten</h3>
          <div className="Progress">
            <md-icon-button><md-icon>+</md-icon></md-icon-button>
            <md-linear-progress value="1"></md-linear-progress>
            <md-icon-button><md-icon>+</md-icon></md-icon-button>
            <md-linear-progress value="0.5"></md-linear-progress>
            <md-icon-button><md-icon>+</md-icon></md-icon-button>
          </div>
          <md-filled-button>Jetzt Starten</md-filled-button>
        </div>
      </body>
    </div>
  );
}

export default App;
