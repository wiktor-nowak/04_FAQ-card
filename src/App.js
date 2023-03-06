import globalStyles from './styles/GlobalStyles.module.scss';
import Container from './components/Container';

function App() {

  return (
    <div className={globalStyles.App}>
      <Container/>
      <div className={globalStyles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a><br/>.
        Coded by <a href="https://github.com/wiktor-nowak">Wiktor Nowak</a>.
      </div>
    </div>
  );
}

export default App;
