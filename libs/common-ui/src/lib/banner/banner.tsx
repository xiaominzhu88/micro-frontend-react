import Button from '@mui/material/Button';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

export interface BannerProps {
  handleClick: () => void;
  showCharacters: boolean;
}
const theme = createTheme({
  palette: {
    secondary: {
      main: lightBlue[100],
    },
  },
});

export function Banner({ handleClick, showCharacters }: BannerProps) {
  //const theme = useTheme();
  console.log(theme);
  return (
    <header>
      <ThemeProvider theme={theme}>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => handleClick()}
        >
          {!showCharacters ? 'Show characters' : 'Hide'}
        </Button>
      </ThemeProvider>
    </header>
  );
}
