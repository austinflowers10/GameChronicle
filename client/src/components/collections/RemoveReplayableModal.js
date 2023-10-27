import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";

export const RemoveReplayableModal = ({game, updateReplayabilityOnGame}) => {
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal);

    return <>
        <BiX onClick={toggle}/>
        <Modal 
            contentClassName="remove-confirm-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <ModalHeader toggle={toggle}>Remove Replayable</ModalHeader>
            <ModalBody>
                <p>Are you sure you want to remove {game.gameSingle.name} from Replayables?</p>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {
                    updateReplayabilityOnGame(game, null)

                    const gameToUpdate = {...game}
                    gameToUpdate.replayabilityRating = null
                    putUserGame(gameToUpdate)

                    toggle()
                }}>
                    Confirm
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>
}