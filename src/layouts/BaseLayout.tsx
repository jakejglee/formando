import React, { ReactNode } from 'react';

import { Grid } from '@chakra-ui/react';

interface BaseProps {
  children?: ReactNode;
}

function BaseLayout({ children }: BaseProps) {
  return (
    <Grid
      h="full"
      justifyContent="center"
      pt={14}
      px={10}
      zIndex={1}
    >
      {children}
    </Grid>
  );
}

export default BaseLayout;
