import { useCallback, useState } from 'react';

import Selector from '../components/Selector';
import Formulator from '../components/formandos/Formulator';
import GCC from '../components/formandos/GCC';

export default function Home() {
  const options = [
    'Formulator',
    'GCC',
  ];
  const [selection, setSelection] = useState(0);
  // TODO(nubby): make this better.
  const renderOption = useCallback((index: number) => {
    switch(options[index]) {
      case 'Formulator':
        return <Formulator />
        break;
      case 'GCC':
        return <GCC />;
        break;
      default:
        return <p>Hi nub</p>;
    }
  }, []);

  return (
    <div>
      <Selector
        options={options}
        setSelection={setSelection}
      />
      {renderOption(selection)}
    </div>
  );
}
