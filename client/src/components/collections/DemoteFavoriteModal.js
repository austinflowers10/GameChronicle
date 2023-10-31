import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { BiDownvote} from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";

export const DemoteFavoriteModal = ({game, setUserGames, userGames, favorites}) => {
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal);

    return <>
        <BiDownvote onClick={toggle}/>
        <Modal 
            contentClassName="demote-favorite-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <ModalHeader toggle={toggle}>Demote Favorite From Top Ten</ModalHeader>
            <ModalBody>
                <p>Are you sure you want to take {game.gameSingle.name} out of your Top Ten?</p>
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => {
                    const gameWithHighestFavoriteRank = favorites.reduce((prev, current) => {
                        return prev.favoriteRanking > current.favoriteRanking ? prev : current;
                      });

                    const gameToUpdate = {...game}
                    gameToUpdate.favoriteRanking = gameWithHighestFavoriteRank + 1 
            
                    const userGamesCopy = [...userGames]
                    userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                    setUserGames(userGamesCopy)
                    
                    putUserGame(gameToUpdate)

                    toggle()
                }}>
                    Demote
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>
}