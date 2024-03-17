import React from 'react';
import {
  Box,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';


interface IArrayElementsWrapper {
  children: React.ReactNode;
  isWrapped?: boolean;
}

function ArrayElementsWrapper ({
  children,
  isWrapped,
}: IArrayElementsWrapper) {
  const w = isWrapped ? "flex" : "full";
  return (
    <Box w={w}>
      {isWrapped ? 
        <Wrap>
        {children}
        </Wrap> :
        <Box>
        {children}
        </Box>
      }
    </Box>
  );
}

export default ArrayElementsWrapper;
