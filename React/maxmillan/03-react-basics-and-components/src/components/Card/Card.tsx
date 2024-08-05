import styles from "./Card.module.scss";

const Card = (props: any) => {
	const { card } = styles;

	return <div className={card + " " + props.className}>{props.children}</div>;
};

export default Card;
