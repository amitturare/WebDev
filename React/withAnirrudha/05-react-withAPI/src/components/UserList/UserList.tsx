
import styles from "./UserList.module.scss";
import { IUserList } from "./UserList.types";


const UserList = ({ users }: IUserList) => {
  const { User } = styles;

  return (
    <>
      {
        users.map(data => (
          <div className={User} key={data.name}>
            <p>{data.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default UserList;