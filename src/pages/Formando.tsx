import { useState } from 'react';

import Formulator from '../components/Formulator';
import Selector from '../components/Selector';

function Formando() {
  const options = [
    "Hi",
    "nub"
  ]
  const [selection, setSelection] = useState(options[0]);
  return (
    <div>
      <Selector
        options={options}
        setSelection={setSelection}
      />
      <Formulator
        selection={selection}
      />
    </div>
  );
}

export default Formando;
