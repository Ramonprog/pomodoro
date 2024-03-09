import { Button } from "./components/Button";

function App() {

  return (
    <>
      <Button variant="primary" children={'btn1'} />
      <Button variant="secondary" children={'btn2'} />
      <Button variant="success" children={'btn3'} />
      <Button children={'btn4'} />
    </>
  )
}

export default App
