import Formulator from '../components/Formulator';
import Selector from '../components/Selector';

function Formando() {
  const options = [
    "Hi",
    "nub"
  ]
  return (
    <div>
      <Selector
        options={options}
      />
      <Formulator />
    </div>
  );
}

export default Formando;
