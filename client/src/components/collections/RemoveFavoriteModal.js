import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";

export const RemoveFavoriteModal = ({game, setUserGames, userGames}) => {
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal);

    return <>
        <BiX onClick={toggle}/>
        <Modal 
            contentClassName="remove-confirm-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <ModalHeader toggle={toggle}>Remove Favorite</ModalHeader>
            <ModalBody>
                <p>Are you sure you want to remove {game.gameSingle.name} from Favorites?</p>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {
                    const gameToUpdate = {...game}
                    gameToUpdate.favoriteRanking = null
            
                    const userGamesCopy = [...userGames]
                    userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                    setUserGames(userGamesCopy)
                    
                    // putUserGame(gameToUpdate)
                    console.log({...gameToUpdate})

                    toggle()
                }}>
                    Remove
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>
}