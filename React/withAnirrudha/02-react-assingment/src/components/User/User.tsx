import { IUserProps } from "./User.types";

const User = ({ name, address, age, friends, isBestFriend, location, showInUpperCase }: IUserProps) => {
  return (
    <div>
      <h2>{showInUpperCase(name)}</h2>
      <span>Address: {address}</span>
      <span>Age: {age}</span>
      <span>Friends: {friends}</span>
      <span>IsBestFriend: {isBestFriend}</span>
      <span>City: {location.city}</span>
      <span>Country: {location.country}</span>
    </div>
  )
}

export default User;