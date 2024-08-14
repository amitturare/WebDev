import { IModalProps } from "./Modal.types";

import styles from "./Modal.module.scss";

const Modal = ({ children }: IModalProps) => {
	const { Backdrop, Modal } = styles;

	return (
		<div className={Backdrop}>
			<div className={Modal}>{children}</div>
		</div>
	);
};

export default Modal;
