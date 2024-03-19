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
  VStack,
} from '@chakra-ui/react';

import ControlledArray from '../ControlledArray/ControlledArray';

interface FormValues {
  foolish: boolean;
  manyThings: string[];
}

const defaults = {
  foolish: true,
  manyThings: [],
}

// ANSWERS:
const answers = {
  foolish: true,
  manyThings: [
    "hi",
    "nub",
  ],
}

function Formulator() {
  const toast = useToast();
  const schema = yup.object().shape({
    foolish: yup.boolean(),
    manyThings: yup.array()
    .of(yup.object({
      value: yup.string()
    }))
    .min(1, "This is required.")
  });
  const [foolish, setFoolish] = useState(false);
  const initialForm = {
    foolish: false,
    manyThings: [],
  }
  const {
    control,
    formState: { errors, isDirty, isValid },
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

  const _checkFormulations = (attempt: FieldValues, answers: FormValues) => {
    let success = true;
    try {
      if (Object.keys(attempt).length == Object.keys(answers).length) {
        Object.keys(attempt).forEach((key) => {
          success = (success && (attempt[key] == answers[key as keyof FormValues]))
        });
        Object.keys(answers).forEach((key) => {
          success = (success && (attempt[key] == answers[key as keyof FormValues]))
        })
      }
    } catch (e) {
      return false;
    }
    return success;
  }
  const onSubmit = (attempt: FieldValues) => {
    console.log(attempt);
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

  const printErrors = () => {
      return (
        <Box>
          Hi nub.
        </Box>
      );
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
            name="manyThings"
            rules={{ input: {
              minLength: 6,
            }}}
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
          <GridItem>
            {printErrors()}
          </GridItem>
      </Grid>
    </form>
  );
}

export default Formulator;
