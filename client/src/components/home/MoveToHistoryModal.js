import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { BiCheck } from "react-icons/bi";
import { useState } from "react"

export const MoveToHistoryModal = ({game, updateCategoryOnGame, putUserGame}) => {
    const [historyConfirmModal, setHistoryConfirmModal] = useState(false)
    const [newDateStarted, setNewDateStarted] = useState("")
    const [newDateFinished, setNewDateFinished] = useState("")

    const toggleHistoryConfirmModal = () => setHistoryConfirmModal(!historyConfirmModal);     

    return <>
    <BiCheck onClick={toggleHistoryConfirmModal} />
    <Modal 
    contentClassName="move-to-history-modal"
    isOpen={historyConfirmModal}
    toggle={toggleHistoryConfirmModal}
    >
        <ModalHeader toggle={toggleHistoryConfirmModal}>Move {game.gameSingle.name} to History</ModalHeader>
        <ModalBody> {/*style={{overflow: 'auto'}} */}
            <p>Are you sure you are done playing this game?</p>
            <fieldset>
                <label htmlFor="dateStarted">Date Started:</label>
                <input type="date" id="dateStarted" value={newDateStarted}
                    onChange={(event) => {
                        setNewDateStarted(event.target.value)
                    }}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="dateFinished">Date Finished:</label>
                <input type="date" id="dateFinished" value={newDateFinished}
                    onChange={(event) => {
                        setNewDateFinished(event.target.value)
                    }}
                />
            </fieldset>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => {
                updateCategoryOnGame(game, 5)
                                        
                const gameToUpdate = {...game}
                gameToUpdate.timeCategoryId = 5
                if (newDateStarted) {
                    gameToUpdate.dateStarted = newDateStarted
                }
                if (newDateFinished) {
                    gameToUpdate.dateFinished = newDateFinished
                }
                putUserGame(gameToUpdate)
                toggleHistoryConfirmModal()
            }}>
                Confirm
            </Button>{' '}
            <Button color="secondary" onClick={toggleHistoryConfirmModal}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
    </>
}