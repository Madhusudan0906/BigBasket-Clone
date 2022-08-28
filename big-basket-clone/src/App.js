
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AllRoutes from "./Routes/AllRoutes"

function App() {
  return (
    <ChakraProvider>
    <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
