import {
  CloseIcon
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  HStack,
} from '@chakra-ui/react';


interface IInputElement {
  value: {
    key: number;
    id: number;
    value: string;
  };
  onDelete: (id: number) => void;
}

function InputElement({
  value,
  onDelete,
}: IInputElement) {
  return (
    <Box
      bg="lightgrey"
      borderRadius="8px"
      borderWidth="1px"
      padding={3}
    >
      <Flex>
          <IconButton
            aria-label="rm-val"
            icon={<CloseIcon />}
            onClick={() => onDelete(value.id)}
          />
          <Box>{value.value}</Box>
      </Flex>
    </Box>
  );
}

export default InputElement;
