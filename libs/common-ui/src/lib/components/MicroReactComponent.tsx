import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useState } from 'react';

function MicroReactComponent() {
  const [value, setValue] = useState<number | null>(4);

  return (
    <div>
      <h1>I'm mui Rating</h1>
      <Box>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
export default MicroReactComponent;
