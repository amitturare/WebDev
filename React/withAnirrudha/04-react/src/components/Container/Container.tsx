import styles from './Container.module.scss'

import { IContainerProps } from './Container.types';

const Container = ({ count, incrementFunction }: IContainerProps) => {
  const { container } = styles;

  return (
    <div className={container}>
      <p>{count}</p>
      <button onClick={incrementFunction}>Increment</button>
    </div>
  )
}

export default Container;