import { useState } from 'react';
import {
  Control,
  FieldArrayWithId,
  FieldValues,
  useController,
  UseControllerProps,
  useFieldArray,
  UseFieldArrayProps,
  useForm,
  useWatch,
} from 'react-hook-form';
import {
  CheckIcon
} from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
  List,
  ListItem,
  VStack,
} from '@chakra-ui/react';

import ArrayElement from './ArrayElement';
import ArrayElementsWrapper from './ArrayElementsWrapper';


interface IControlledArray {
  control: Control;
  name: string;
  rules?: FieldValues | undefined;
};
interface IError {
  message: string;
  type: "minLength";
};
interface IElement {
  value: string;
  id: string;
};

function ControlledArray({
  control,
  name,
  rules,
}: IControlledArray) {
  const {
    fields,
    append,
    remove
  }: {
    fields: IElement[];
    append: (obj: object | object[]) => void;
    remove: (index?: number | number[]) => void;
  } = useFieldArray({
    control,
    name: name,
    rules: rules
  });
  const [pendingInput, setPendingInput] = useState<string>("");
  const [errors, setErrors] = useState<IError[]>([]);

  // Parse user input-focused rules here.
  // TODO(nubby): improve elegance pls.
  const minInputLength = rules?.input?.minLength ?? 0;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO(nubby): add live searching of options.
    setPendingInput(e.target.value);
  }
  const handleElementDelete = (id: number) => {
    remove(id);
  }
  const handleElementAdd = (value: string) => {
    console.log(value);
    if (value.length >= minInputLength) {
      append({ value: value })
      setErrors([]);
    } else {
      if (!errors.find(e => e.type === "minLength")) {
        setErrors([
          ...errors,
          {
            type: "minLength",
            message: `Must be longer than ${minInputLength} characters.`,
          }
        ]);
      }
    }
  }
  const printErrors = () => {
    if (errors != undefined) {
      return (
        <List>
          {errors.map((e) => <ListItem key={e.type}>{e.message}</ListItem>)}
        </List>
      );
    }
  }

  const {
    register,
    handleSubmit
  } = useForm();
  console.log("fields",fields);

  return (
    <Box>
      <VStack>
        <ArrayElementsWrapper>
          {fields?.map((f, index) => {
            console.log("field",f.value);
            return (
              <ArrayElement
                id={f.id}
                key={index}
                value={f.value}
                onDelete={() => handleElementDelete(index)}
              />
            )}
          )}
          
        </ArrayElementsWrapper>
        <HStack>
          <Input
            {...register("userInput")}
          />
          <IconButton
            aria-label="add-val"
            icon={<CheckIcon />}
            onClick={handleSubmit((data) => (
              handleElementAdd(data["userInput"])
            ))}
          />
        </HStack>
        {printErrors()}
      </VStack>
    </Box>
  );
}

export default ControlledArray;
