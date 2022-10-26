import Button from '@mui/material/Button';

export interface BannerProps {
  handleClick: () => void;
  showCharacters: boolean;
}

export function Banner({ handleClick, showCharacters }: BannerProps) {
  return (
    <header>
      <Button variant="contained" onClick={() => handleClick()}>
        {!showCharacters ? 'Show characters' : 'Hide'}
      </Button>
    </header>
  );
}

export default Banner;
