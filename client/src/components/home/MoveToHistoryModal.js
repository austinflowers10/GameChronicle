import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react"
import { BiCheck } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";

export const MoveToHistoryModal = ({game, setUserGames, userGames, updateCategoryOnGame, buttonIsIcon}) => {
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
        ? <BiCheck onClick={toggleHistoryConfirmModal} />
        : <Button onClick={toggleHistoryConfirmModal}>History</Button>
    }
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
            <fieldset>
                <label htmlFor="isCompleted">Completed to 100%?</label>
                <input type="checkbox" id="isCompleted" checked={isChecked}
                    onChange={(event) => {
                        setIsChecked(event.target.checked)
                    }}
                />
            </fieldset>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => {       
                const gameToUpdate = {...game}

                gameToUpdate.timeCategoryId = 5
                if (newDateStarted) {
                    gameToUpdate.dateStarted = `${newDateStarted}T00:00:00`
                }
                if (newDateFinished) {
                    gameToUpdate.dateFinished = `${newDateFinished}T00:00:00`
                }
                if (isChecked == true) {
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
            <Button color="secondary" onClick={toggleHistoryConfirmModal}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
    </>
}