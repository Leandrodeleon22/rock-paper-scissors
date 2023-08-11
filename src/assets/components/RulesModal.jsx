import classes from "./RulesModal.module.css";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const RulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div className={classes.modal} onClick={handleModalClick}>
        <h1>RULES</h1>
        <img src={rules} alt="rules" />
        <button className={classes.modalClose} onClick={onClose}>
          <img src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
