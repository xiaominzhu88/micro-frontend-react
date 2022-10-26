import Button from '@mui/material/Button';

export interface BannerProps {
  text: string;
}

export function Banner({ text }: BannerProps) {
  return (
    <header>
      <Button variant="contained">{text}</Button>
    </header>
  );
}

export default Banner;
