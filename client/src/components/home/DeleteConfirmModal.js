import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { deleteUserGame } from "../../managers/userGameManager";

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
        <ModalHeader toggle={toggle}>Delete Warning</ModalHeader>
            <ModalBody>
                <p>This action will completely delete this game with all of its related information. Are you sure?</p>
                <fieldset>
                    <label htmlFor="deleteCheckbox">I understand</label>
                    <input type="checkbox" id="deleteCheckbox" checked={isChecked}
                        onChange={(event) => {
                            setIsChecked(event.target.checked)
                        }}
                    />
                </fieldset>
            </ModalBody>
            <ModalFooter>
                <Button disabled={!isChecked} color="danger" onClick={() => {
                    deleteUserGame(game.id)

                    const filteredUserGames = userGames.filter(ug => ug.id !== game.id)
                    setUserGames(filteredUserGames)
                    
                    toggle()
                }}>
                    Confirm Delete
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>
}