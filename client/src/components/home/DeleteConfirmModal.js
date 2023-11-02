import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { deleteUserGame } from "../../managers/userGameManager";
import { BiX } from "react-icons/bi";

export const DeleteConfirmModal = ({game, userGames, setUserGames}) => {
    const [modal, setModal] = useState(false)
    const [isChecked, setIsChecked] = useState()
    
    const toggle = () => setModal(!modal);

    useEffect(() => {
        modal === true 
        ? setIsChecked(false)
        : setIsChecked(false)
    },[modal])

    return <>
        <Button className="game-details-option delete-button" onClick={toggle}>Delete</Button>
        <Modal 
            contentClassName="delete-confirm-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <div className="modal-header-row">
            <p className="modal-header-text">Delete Warning</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
            <ModalBody>
                <p className="modal-prompt-text">This action will completely delete this game with all of its related information. Are you sure?</p>
                <fieldset className="fieldset-input-row">
                    <label htmlFor="deleteCheckbox">I understand</label>
                    <input className="checkbox" type="checkbox" id="deleteCheckbox" checked={isChecked}
                        onChange={(event) => {
                            setIsChecked(event.target.checked)
                        }}
                    />
                </fieldset>
            </ModalBody>
            <div className="modal-footer-row">
                <Button className="modal-footer-button delete-button" disabled={!isChecked} onClick={() => {
                    deleteUserGame(game.id)

                    const filteredUserGames = userGames.filter(ug => ug.id !== game.id)
                    setUserGames(filteredUserGames)
                    
                    toggle()
                }}>
                    Confirm Delete
                </Button>{' '}
                <Button className="modal-footer-button cancel" onClick={toggle}>
                    Cancel
                </Button>
            </div>
        </Modal>
    </>
}