import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary" children={'btn1'} />
        <Button variant="secondary" children={'btn2'} />
        <Button variant="success" children={'btn3'} />
        <Button children={'btn4'} />
      </ThemeProvider>

    </>
  )
}

export default App
