import React from 'react';
import {
  Control,
  useController,
} from 'react-hook-form';
import {
  Box,
  Input,
} from '@chakra-ui/react';


interface IControlledArrayInput {
  control: Control;
  name: string;
  options?: Array<string> | undefined;
  required?: boolean | undefined;
}

function ControlledArray({
  control,
  name,
  options,
  required,
}: IControlledArrayInput) {
  const {
    field,
    fieldState,
    formState,
  } = useController({
    control,
    name,
    rules: { required: required }
  });
  console.log("Inputs: ",control,name);
  return (
    <Box>
      
    </Box>
  );
}

export default ControlledArray;
