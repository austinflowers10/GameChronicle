import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react"
import { BiCheck, BiX } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";

export const MoveToHistoryModal = ({game, setUserGames, userGames, buttonIsIcon, isHistory}) => {
    const [historyConfirmModal, setHistoryConfirmModal] = useState(false)
    const [newDateStarted, setNewDateStarted] = useState(null)
    const [newDateFinished, setNewDateFinished] = useState(null)
    const [isChecked, setIsChecked] = useState()

    const toggleHistoryConfirmModal = () => setHistoryConfirmModal(!historyConfirmModal);     

    useEffect(() => {
        if (game.dateStarted) {
            setNewDateStarted(game.dateStarted?.split("T")[0])
        }
        if (game.dateFinished) {
            setNewDateFinished(game.dateFinished?.split("T")[0])
        }
        if (game.isCompleted) {
            setIsChecked(true)
        }
    }, [game])

    return <>
    {
        buttonIsIcon
        ? <BiCheck className="game-card-option" onClick={toggleHistoryConfirmModal} />
        : <Button className="game-details-option" onClick={toggleHistoryConfirmModal}>History</Button>
    }
    <Modal 
    contentClassName="move-to-history-modal"
    isOpen={historyConfirmModal}
    toggle={toggleHistoryConfirmModal}
    >
        <div className="modal-header-row">
            {
                !isHistory
                ? <p className="modal-header-text">Move Game to History</p>
                : <p className="modal-header-text">Edit Finished Game Info</p>
            }
            <BiX className="modal-x-icon" onClick={toggleHistoryConfirmModal}/>
        </div>
        <ModalBody> {/*style={{overflow: 'auto'}} */}
        {
            !isHistory
            ? <p>Are you sure you are done playing this game?</p>
            : ""
        }
            
            <fieldset className="fieldset-input-row">
                <label htmlFor="dateStarted" className="label date-label">Date Started:</label>
                <input type="date" id="dateStarted" className="input date-input" value={newDateStarted}
                    onChange={(event) => {
                        setNewDateStarted(event.target.value)
                    }}
                />
            </fieldset>
            <fieldset className="fieldset-input-row">
                <label htmlFor="dateFinished" className="label date-label">Date Finished:</label>
                <input type="date" id="dateFinished" className="input date-input" value={newDateFinished}
                    onChange={(event) => {
                        setNewDateFinished(event.target.value)
                    }}
                />
            </fieldset>
            <fieldset className="fieldset-input-row" >
                <label htmlFor="isCompleted" className="label checkbox-label">Completed to 100%:</label>
                <input type="checkbox" id="isCompleted" className="checkbox" checked={isChecked}
                    onChange={(event) => {
                        setIsChecked(event.target.checked)
                    }}
                />
            </fieldset>
        </ModalBody>
        <div className="modal-footer-row">
            <Button className="modal-footer-button confirm" onClick={() => {       
                const gameToUpdate = {...game}

                gameToUpdate.timeCategoryId = 5

                if (newDateStarted === "") {
                    gameToUpdate.dateStarted = null
                } else {
                    gameToUpdate.dateStarted = `${newDateStarted}T00:00:00`
                }
                if (newDateFinished === "") {
                    gameToUpdate.dateFinished = null
                } else {
                    gameToUpdate.dateFinished = `${newDateFinished}T00:00:00`
                }
                if (isChecked === true) {
                    gameToUpdate.isCompleted = true
                } else if (isChecked === false) {
                    gameToUpdate.isCompleted = false
                }

                const userGamesCopy = [...userGames]
                userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                setUserGames(userGamesCopy)

                putUserGame(gameToUpdate)
                toggleHistoryConfirmModal()
            }}>
                Confirm
            </Button>{' '}
            <Button className="modal-footer-button cancel" onClick={toggleHistoryConfirmModal}>
                Cancel
            </Button>
        </div>
    </Modal>
    </>
}