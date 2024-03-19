import {
  CloseIcon
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/react';


interface IArrayElement {
  id: string;
  value: string;
  onDelete: (id: string) => void;
}

function ArrayElement({
  id,
  value,
  onDelete,
}: IArrayElement) {
  return (
    <Box
      bg="brand.gray.light"
      borderRadius="6px"
      borderWidth="0px"
      padding={2}
      paddingLeft={4}
      w="full"
    >
      <Flex gap={1}>
        <Text w="full" isTruncated>{value}</Text>
        <IconButton
          aria-label="rm-val"
          icon={<CloseIcon />}
          size="xs"
          variant="opaque"
          onClick={() => onDelete(id)}
        />
      </Flex>
    </Box>
  );
}

export default ArrayElement;
