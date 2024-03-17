import { useState } from 'react';
import {
  Control,
  useController,
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


interface IControlledArray {
  control: Control;
  name: string;
  required?: boolean;
}
interface IElement {
  value: string;
  id: number;
}

let UID = 0;

function ControlledArray({
  control,
  name,
  required,
}: IControlledArray) {
  const {
    field,
    fieldState,
    formState,
  } = useController({
    control,
    name,
    rules: { required: required }
  });
  const [runningArray, setRunningArray] = useState<IElement[]>([]);
  const [pendingInput, setPendingInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO(nubby): add live searching of options.
    setPendingInput(e.target.value);
  }
  const handleElementDelete = (id: number) => {
    setRunningArray(runningArray.filter(v => v.id != id));
  }
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
