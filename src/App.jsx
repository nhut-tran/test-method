import DashBoard from "./components/Dashboard";
import Header from "./components/Header";
import MethodForm from "./components/MethodForm";

import MethodContextProvider from "./context/MethodContext";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (

    <ThemeContextProvider>
      <Header />
      <MethodContextProvider>
        <DashBoard />
        <MethodForm />
      </MethodContextProvider>

    </ThemeContextProvider>

  )
}

export default App;
