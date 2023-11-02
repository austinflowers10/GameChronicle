import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useState, useEffect } from "react"
import { putUserGame } from "../../managers/userGameManager";
import { BiX } from "react-icons/bi";

export const ReplayableModal = ({ game, setUserGames, userGames }) => {
    const [modal, setModal] = useState(false)
    const [newRating, setNewRating] = useState(null)
    
    const toggle = () => setModal(!modal);

    return <>
    <Button className="game-details-option" onClick={toggle}>Replayability</Button>
    <Modal 
        contentClassName="replayable-modal"
        isOpen={modal}
        toggle={toggle}
    >
        <div className="modal-header-row">
            <p className="modal-header-text">Change Replayability Rating</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
        <ModalBody>
            {
                game.replayabilityRating
                ? <p>Current Replayability Rating: {game.replayabilityRating}</p>
                : <p>How likely are you to replay this game?</p>
            }
            <fieldset className="fieldset-input-row">
                <label htmlFor="replayabilityRating">
                {
                    game.replayabilityRating
                    ? "Change Rating:" 
                    : "Add Rating:"
                }
                </label>
                <input className="input" type="number" id="replayabilityRating" min={1} max={10} value={newRating}
                    onChange={(event) => {
                        setNewRating(parseInt(event.target.value))
                    }}
                />
            </fieldset>
        </ModalBody>
        <div className="modal-footer-row">
            <Button className="modal-footer-button confirm" disabled={!newRating} onClick={() => {
                if (newRating) {
                    const gameToUpdate = {...game}
                    gameToUpdate.replayabilityRating = newRating
                    putUserGame(gameToUpdate)

                    const userGamesCopy = [...userGames]
                    userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                    setUserGames(userGamesCopy)
                    toggle()
                }
            }}>
                Confirm
            </Button>{' '}
            <Button className="modal-footer-button cancel" onClick={toggle}>
                Cancel
            </Button>
        </div>
    </Modal>
</>
}