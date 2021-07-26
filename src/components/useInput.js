import { useState } from "react";

function useInput({ intitalValue }) {
  const [value, setValue] = useState(intitalValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(intitalValue),
  ];
}
export default useInput;
