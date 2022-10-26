# micro-frontend-react

This micro frontend app will contain a **container** app and a **microReact** app
- **container** is a container app that will inject **microReact** micro frontend.
- **microReact** app — is hosted separately and exposes the component, which will be accessible from the **container** app.


<hr />

Step 1: create monorepo workspace with empty setup named mf-react :
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

Step 4: generating the microReact app:
```jsx
nx g @nrwl/react:app microReact
```

Now you can use 👇 to start each application
```jsx
npx nx serve micro-react
// or
npx nx serve container
```
or change "defaultProject": "..." within "nx.json" and  use 
```jsx
npm start
```
