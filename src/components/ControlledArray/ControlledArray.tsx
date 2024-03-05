import React, { useState } from 'react';
import {
  Control,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  CheckIcon
} from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
  VStack,
} from '@chakra-ui/react';

import ArrayElement from './ArrayElement';
import ArrayElementsWrapper from './ArrayElementsWrapper';

interface IControlledArrayInput {
  control: Control;
  name: string;
  options?: Array<string> | undefined;
  required?: boolean | undefined;
}


let UID = 0;

function ControlledArray({
  control,
  name,
  options,
  required,
}: UseControllerProps<IControlledArrayInput>) {
  const [runningArray, setRunningArray] = useState<Array>([]);
  const [pendingInput, setPendingInput] = useState<string>("");
  const {
    field,
    fieldState,
    formState,
  } = useController({
    control,
    name,
    rules: { required: required }
  });

  const handleElementAdd = () => {
    setPendingInput("");
    setRunningArray([
      ...runningArray,
      {
        value: pendingInput,
        id: UID,
      }
    ]);
    UID++;
    field.onChange();
  }
  const handleElementDelete = (id: number) => {
    setRunningArray(runningArray.filter(v => v.id != id));
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO(nubby): add live searching of options.
    setPendingInput(e.target.value);
  }

  return (
    <Box>
      <VStack>
        <ArrayElementsWrapper>
          {runningArray?.map((e, index) => {
            console.log(e.id, e.value);
            return (
              <ArrayElement
                id={e.id}
                key={e.id}
                value={e.value}
                onDelete={handleElementDelete}
              />
            )
          })}
        </ArrayElementsWrapper>
        <HStack>
          <Input
            {...field}
            onChange={handleChange}
            onBlur={field.onBlur}
            ref={field.ref}
            value={pendingInput}
          />
          <IconButton
            aria-label="add-val"
            icon={<CheckIcon />}
            onClick={handleElementAdd}
          />
        </HStack>
      </VStack>
    </Box>
  );
}

export default ControlledArray;
