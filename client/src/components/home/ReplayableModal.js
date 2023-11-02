import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useState, useEffect } from "react"
import { putUserGame } from "../../managers/userGameManager";

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
    <ModalHeader toggle={toggle}>Change or Add Replayability Rating</ModalHeader>
        <ModalBody>
            {
                game.replayabilityRating
                ? <p>Current Replayability Rating: {game.replayabilityRating}</p>
                : <p>How likely are you to replay this game on a scale of 1 to 10?</p>
            }
            <fieldset>
                <label htmlFor="replayabilityRating">
                {
                    game.replayabilityRating
                    ? "Change Rating:" 
                    : "Add Rating"
                }
                </label>
                <input type="number" id="replayabilityRating" min={1} max={10} value={newRating}
                    onChange={(event) => {
                        setNewRating(parseInt(event.target.value))
                    }}
                />
            </fieldset>
        </ModalBody>
        <ModalFooter>
            <Button disabled={!newRating} color="primary" onClick={() => {
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
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
</>
}