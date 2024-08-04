import Toggle from "./Components/Toggle/Toggle";

import { IToggleProps } from "./Components/Toggle/Toggle.types";

const App = () => {

  const toggles: IToggleProps[] = [
    { name: "Vault", serverName: "EC2", status: "ON" },
    { name: "Stessa", serverName: "Lambda", status: "OFF" }
  ]

  return (
    <>
      <Toggle togglesData={toggles} />
    </>
  )
}

export default App;