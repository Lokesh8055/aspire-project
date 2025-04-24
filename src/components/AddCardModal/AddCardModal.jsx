import { useAddCardContext } from "../../context/AddCardContext";
import { useAddCardModal, ADD_CARD_CONST } from "./AddCardData";
import "./AddCardModal.css";

const AddCardModal = () => {
  const { modalOpened, handleModalClosed, handleAddCard } = useAddCardContext();
  const { name, error, handleNameChange, handleSubmit } = useAddCardModal(handleAddCard, handleModalClosed);

  if (!modalOpened) return null;

  return (
    <div className="modal-overlay" onClick={handleModalClosed} aria-label="Overlay">
      <div className="modal-content" onClick={e => e.stopPropagation()} aria-label="Modal content">
        <div className="modal-header">
          <h2>{ADD_CARD_CONST.ADD_NEW_CARD}</h2>
          <button className="modal-close" onClick={handleModalClosed} aria-label="Close modal">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="cardName" className="form-label">{ADD_CARD_CONST.CARD_HOLDER_NAME}</label>
            <input
              id="cardName"
              type="text"
              className="form-input"
              placeholder={ADD_CARD_CONST.NAME_PLACEHOLDER}
              value={name}
              onChange={handleNameChange}
              maxLength={ADD_CARD_CONST.MAX_NAME_LENGTH}
              aria-required="true"
              aria-invalid={!name.trim() || name.length > ADD_CARD_CONST.MAX_NAME_LENGTH}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <button className="button" onClick={handleSubmit}>
            {ADD_CARD_CONST.ADD_CARD}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
