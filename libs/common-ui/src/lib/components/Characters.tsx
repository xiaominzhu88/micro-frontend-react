import styles from '../common-ui.module.css';
import { useFetchHook } from '../../../../fetch/src';

const Characters = ({ showCharacters }: { showCharacters: boolean }) => {
  const { loading, error, data } = useFetchHook(); // reuse everywhere

  if (loading) return <p>Loading...</p>;
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

export default Characters;
