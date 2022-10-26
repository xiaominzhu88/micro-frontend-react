# micro-frontend-react

This example micro frontend app will contain a **container** app and a **micro_react** app

- **container** -- container app using mui button imported from shared library
- **micro_react** —- micro_react app using mui button and rating imported from shared library

<hr />

Step 1: create monorepo workspace with empty setup named micro-frontend-react and target into it

```jsx
npx create-nx-workspace --preset=empty micro-frontend-react
cd micro-frontend-react
```

Step 2: installing all react dependencies:

```jsx
npm install -D @nrwl/react
```

Step 3: generating container app:

```jsx
nx g @nrwl/react:app container
```

Step 4: generating the micro_react app:

```jsx
nx g @nrwl/react:app micro_react
```

Now you can use 👇 to start each application

```jsx
npx nx serve micro_react
// or
npx nx serve container
```

or change "defaultProject": "..." within "nx.json" and use

```jsx
npm start
```

<hr />

### Configuring micro_react app, add some ui

- To create the common-ui library, use the **@nrwl/react:lib** generator

```jsx
npx nx g @nrwl/react:lib common-ui
```

- Create a banner contains only a button

```jsx
npx nx g @nrwl/react:component banner --project=common-ui --export
```

=> banner will follow this path: micro-frontend-react/libs/common-ui/src/lib/banner

- Add mui packages

```jsx
npm install @mui/material @emotion/react @emotion/styled
```

- Update banner:

```jsx
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
```

- Import banner from micro_react/src/app/app.tsx

```jsx
import { Banner } from '@micro-frontend-react/common-ui';
export function App() {
  return (
    <div className={styles['app_wrapper']}>
      <Banner text="I'm imported mui Button" />
    </div>
  );
}
```

### Configuring container app, same as micro_react
