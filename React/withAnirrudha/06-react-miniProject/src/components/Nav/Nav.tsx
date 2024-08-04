import styles from "./Nav.module.scss"

const Nav = () => {
  const { nav } = styles;

  return (<nav className={nav}>
    <h1>Employees</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&s" alt="profile-img" />
  </nav>)
}

export default Nav