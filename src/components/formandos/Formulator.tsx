import { useMemo } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Box,
  Button,
  Grid,
  GridItem,
  useToast,
} from '@chakra-ui/react';


interface FormShape {
  foolish: boolean;
}

// ANSWERS:
const answers = {
  foolish: true,
}

function Formulator() {
  const toast = useToast();

  const schema = yup.object().shape({
    foolish: yup.boolean(),
  });
  const {
    register,
    reset,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      foolish: false
    },
    resolver: yupResolver(schema),
  });

  const defeat = () => {
    console.log('Y u nub?');
  }
  const victory = () => {
    console.log('BOOP');
  }

  const _checkFormulations = (attempt: FieldValues, answers: FormShape) => {
    console.log(attempt,answers);
    return false;
  }
  const onSubmit = () => {
    (attempt: FieldValues) => {
      const match = _checkFormulations(attempt, answers);
      match ? 
        victory() :
        defeat();
    }
  }
  
  const handleFoolishClick = (e: object) => {
    console.log('handling a foolish click: ',e);
  }

  return (
    <form id="formulator" onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <GridItem>
          <Button onClick={handleFoolishClick} {...register("foolish")}>
            whHWat?
          </Button>
        </GridItem>
      </Grid>
      Beep boop beep. You chose something.
      <Button type="submit">
        Hi.
      </Button>
    </form>
  );
}

export default Formulator;
