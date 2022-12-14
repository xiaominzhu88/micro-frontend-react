import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useState } from 'react';

export function RatingStar() {
  const [value, setValue] = useState<number | null>(4);

  return (
    <div>
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
