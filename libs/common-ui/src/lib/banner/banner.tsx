import Button from '@mui/material/Button';
import { useTheme, ThemeProvider } from '@mui/material/styles';

export interface BannerProps {
  handleClick: () => void;
  children: string;
}

export function Banner({ handleClick, children }: BannerProps) {
  const theme = useTheme();
  return (
    <header>
      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleClick()}
        >
          {children}
        </Button>
      </ThemeProvider>
    </header>
  );
}
