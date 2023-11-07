import { Select } from '@chakra-ui/react';

interface SelectorTypes {
  options: string[];
}

function Selector({
  options
}: SelectorTypes) {
  return (
    <Select>
      {options?.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Select>
  );
}

export default Selector;
