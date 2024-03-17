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

import ControlledArray from '../ControlledArray/ControlledArray';

interface FormShape {
  foolish: boolean;
}

const defaults = {
  hi: true
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
  const initialForm = {
    foolish: false,
  }
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: initialForm,
    resolver: yupResolver(schema),
  });

  const defeat = () => {
    console.log('Y u nub?');
  }
  const victory = () => {
    console.log('BOOP');
  }

  const resetForm = () => {
    reset();
    // TODO(nubby): Make this better too.
    setFoolish(initialForm.foolish);
  }

  const _checkFormulations = (attempt: FieldValues, answers: FormShape) => {
    let success = true;
    try {
      if (Object.keys(attempt).length == Object.keys(answers).length) {
        Object.keys(attempt).forEach((key) => {
          success = (success && (attempt[key] == answers[key as keyof FormShape]))
        });
        Object.keys(answers).forEach((key) => {
          success = (success && (attempt[key] == answers[key as keyof FormShape]))
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
    resetForm();
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
          <ControlledArray
            control={control}
            name="many-things"
          />
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
