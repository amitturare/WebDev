import styles from "./Toggle.module.scss"

import { IToggleList } from "./Toggle.types"

const Toggle = ({ togglesData }: IToggleList) => {

  return (
    <>
      {togglesData.map(({ name, serverName, status }) => {
        const classList = status === "ON" ? styles.ToggleOn : styles.ToggleOff
        return (<div className={classList}>
          <span>{name} - {serverName}</span>
          <span>{status}</span>
        </div>)
      })}
    </>
  )
}

export default Toggle