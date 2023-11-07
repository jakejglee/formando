interface FormulatorTypes {
  selection: string;
}

function Formulator({
  selection
}: FormulatorTypes) {
  return (
    <div>
      Beep boop beep. You chose {selection}.
    </div>
  );
}

export default Formulator;
