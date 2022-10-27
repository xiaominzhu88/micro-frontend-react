import styles from '../common-ui.module.css';
import CircularProgree from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { useFetchHook } from '@micro-frontend-react/fetch';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[100],
    },
  },
});

export const Characters = ({ showCharacters }: { showCharacters: boolean }) => {
  const { loading, error, data } = useFetchHook(); // reuse everywhere
  if (loading)
    return (
      <p>
        <ThemeProvider theme={theme}>
          <CircularProgree color="primary" size={120} />
        </ThemeProvider>
      </p>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles['characters']}>
      {showCharacters &&
        data?.characters.results.map(
          ({
            id,
            name,
            image,
          }: {
            id: string;
            name: string;
            image: string;
          }) => {
            return (
              <div key={id}>
                <img src={image} alt={name} width={200} height={150} />
                <p>{name}</p>
              </div>
            );
          }
        )}
    </div>
  );
};
