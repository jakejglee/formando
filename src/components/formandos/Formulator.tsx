import { useRef, useState } from 'react';

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
  const [foolish, setFoolish] = useState(false);
  const {
    formState: { isDirty, isValid },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      foolish: foolish
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
    let success = true;
    try {
      if (Object.keys(attempt).length == Object.keys(answers).length) {
        Object.keys(attempt).forEach((attkey) => {
          success = (success && (attempt[attkey] == answers[attkey]))
        });
        Object.keys(answers).forEach((ankey) => {
          success = (success && (attempt[ankey] == answers[ankey]))
        })
      }
    } catch (e) {
      return false;
    }
    return success;
  }
  const onSubmit = (attempt: FieldValues) => {
    const match = _checkFormulations(attempt, answers);
    match ? 
      victory() :
      defeat();
    reset();
  }
  
  const handleFoolishClick = () => {
    // TODO(nubby): There has to be a way to combine state. /':
    setValue('foolish', !foolish);
    setFoolish(!foolish);
  }

  return (
    <form id="formulator" onSubmit={handleSubmit(onSubmit)}>
      <Grid
        columnGap={24}
      >
        <GridItem>
          <Button onClick={handleFoolishClick} {...register("foolish")}>
            ???
          </Button>
        </GridItem>
        <GridItem>
          Beep boop beep. You chose something.
        </GridItem>
        <GridItem>
          <Button type="submit">
            SUBMIT RESPONSE
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}

export default Formulator;
