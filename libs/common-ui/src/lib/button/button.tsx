import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  lightBlue,
  purple,
  lightGreen,
  deepOrange,
} from '@mui/material/colors';

export interface CustomButtonProps {
  onClick: () => void;
  children: string;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'inherit'
    | undefined;
  size: 'small' | 'medium' | 'large' | undefined;
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[200],
    },
    secondary: {
      main: lightBlue[300],
    },
    info: {
      main: lightGreen[100],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            color: deepOrange[300],
          }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: lightBlue[100],
            }),
        }),
      },
    },
  },
});

export function CustomButton({
  color,
  variant,
  size,
  onClick,
  children,
}: CustomButtonProps) {
  return (
    <header>
      <ThemeProvider theme={theme}>
        <Button
          color={color}
          size={size}
          variant={variant}
          onClick={() => onClick()}
        >
          {children}
        </Button>
      </ThemeProvider>
    </header>
  );
}
