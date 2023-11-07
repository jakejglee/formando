import { Select } from '@chakra-ui/react';

interface SelectorTypes {
  options: string[];
  setSelection: () => void;
}

function Selector({
  options,
  setSelection
}: SelectorTypes) {
  return (
    <Select onChange={(e) => setSelection(e.target.value)}>
      {options?.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </Select>
  );
}

export default Selector;
