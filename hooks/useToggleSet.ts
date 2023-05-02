import { useState } from "react";

function useToggleSet<T>(initSet?: T[]) {
  // Setup the active set.
  const [activeSet, setActiveSet] = useState(initSet || ([] as T[]));

  // Toggle element within the set.
  const toggleElement = (element: T) => {
    // If the set already has the element then remove it.
    if (activeSet.includes(element)) {
      setActiveSet(activeSet.filter((el) => el !== element));
    }
    // Else add the element to the set.
    else {
      setActiveSet(activeSet.concat(element));
    }
  };
  return [activeSet, toggleElement] as const;
}

export default useToggleSet;
