import { Select } from '@chakra-ui/react';

interface SelectorTypes {
  options: string[];
  setSelection: (arg0: number) => void;
}

function Selector({
  options,
  setSelection
}: SelectorTypes) {
  return (
    <Select onChange={(e) => setSelection(Number(e.target.value))}>
      {options.map((option, index) => (
        <option
          key={index}
          value={index}
        >
          {option}
        </option>
      ))}
    </Select>
  );
}

export default Selector;
