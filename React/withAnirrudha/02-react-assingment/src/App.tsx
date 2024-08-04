import "./App.css";

import User from "./components/User/User";
import { IUserProps } from "./components/User/User.types";

function App() {
  const user: IUserProps = {
    name: "Raj",
    address: "Viman Nagar",
    age: 22,
    friends: ["1", "2", "3", "4"],
    isBestFriend: true,
    location: {
      city: "Pune",
      country: "India",
    },
    showInUpperCase: (name: string) => name.toUpperCase()
  };

  return <>
    <User {...user} />
  </>;
}

export default App;
