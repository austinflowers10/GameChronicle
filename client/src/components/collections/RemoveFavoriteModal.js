import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";

export const RemoveFavoriteModal = ({game, setUserGames, userGames}) => {
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal);

    return <>
        <BiX className="game-card-option" onClick={toggle}/>
        <Modal 
            contentClassName="remove-confirm-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <div className="modal-header-row">
            <p className="modal-header-text">Remove Favorite</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
            <ModalBody>
                <p className="modal-prompt-text">Are you sure you want to remove {game.gameSingle.name} from Favorites?</p>
            </ModalBody>
            <div className="modal-footer-row">
                <Button className="modal-footer-button delete-button" onClick={() => {
                    const gameToUpdate = {...game}
                    gameToUpdate.favoriteRanking = null
            
                    const userGamesCopy = [...userGames]
                    userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                    setUserGames(userGamesCopy)
                    
                    putUserGame(gameToUpdate)
                    console.log({...gameToUpdate})

                    toggle()
                }}>
                    Remove
                </Button>{' '}
                <Button className="modal-footer-button cancel" onClick={toggle}>
                    Cancel
                </Button>
            </div>
        </Modal>
    </>
}