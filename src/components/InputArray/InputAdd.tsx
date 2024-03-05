import { useState } from 'react';
import {
  CheckIcon
} from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
} from '@chakra-ui/react';

interface IInputAdd {
  value: string;
  onAdd: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputAdd({
  value,
  onAdd,
  onChange,
}: IInputAdd) {
  return (
    <Box>
      <HStack>
        <Input
          placeholder="Input stuff here"
          value={value}
          onChange={onChange}
        />
        <IconButton
          aria-label="add-val"
          icon={<CheckIcon />}
          onClick={onAdd}
        />
      </HStack>
    </Box>
  );
}

export default InputAdd;
