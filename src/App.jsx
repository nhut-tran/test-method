import DashBoard from "./components/Dashboard";
import MethodContextProvider from "./context/MethodContext";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (

    <ThemeContextProvider>

      <MethodContextProvider>
        <DashBoard />

      </MethodContextProvider>

    </ThemeContextProvider>

  )
}

export default App;
