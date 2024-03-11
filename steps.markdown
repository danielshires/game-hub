## Step 1

Set-up base react files using Vite and React.

npm create vite@latest

## Step 2

Bring in your component library e.g. Chakra UI or Shad UI.

npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

Shad CN - https://ui.shadcn.com/docs
Chakra UI - https://chakra-ui.com/getting-started

Remove any custom CSS

## Step 3

Add colour theme to your app if using Chakra UI in

  - theme.ts
  - main.tsx

Create NavBar component. Add colour switcher logic to NavBar component.

## Step 4

Add grid structure to App component.

Set-up the strcuture of the page using Grid and GridItem components.

## Step 5

Set up AXIOS for fetching data from an API.

npm i axios

Create a api-client service file to handle API calls in a folder called Services

## Step 6

Set-up a componenent to display the data fetched from the API.

Set up state to store the results of the API call and the error if there is one.

e.g.

const [games, setGames] = useState<Game[]>([]);
const [error, setError] = useState(null);

useEffect to fetch data from the API and display it in a component.

Set-up an interface to define the shape of the data from the response

e.g.

Interface Game {
    id: number;
    name: string;
    rating: number;
    released: string;
    background_image: string;
}

Remember to include the interface in the state.

Return the data in a div or list (whatever is appropriate for the data being returned)

## Step 7

Create a custom hook to fetch the data from the API.

Create a folder called hooks and create a file called useFetch.ts (or something like it)


## Step 8

Add React icons library

npm i react-icons@4.7.1


