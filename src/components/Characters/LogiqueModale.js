import { useState } from 'react';

const LogiqueModale = () => {
  const [view, setWiew] = useState(false);

  function toggle() {
    setWiew(!view);
  }
  return {
    view,
    toggle,
  };
};

export default LogiqueModale;
