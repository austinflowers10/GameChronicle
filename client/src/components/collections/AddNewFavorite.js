import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { putUserGame } from "../../managers/userGameManager";
import { useNavigate } from "react-router-dom";
import { BiPlus, BiX } from "react-icons/bi";
import { useState } from "react";

export const AddNewFavoriteModal = ({ userGames, setUserGames, favorites}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const toggle = () => setModal(!modal);

    return <>
    <BiPlus className="page-header-icon other-favorites" onClick={toggle}/>
    <Modal 
        contentClassName="add-new-favorite-modal"
        isOpen={modal}
        toggle={toggle}
    >
    <div className="modal-header-row">
            <p className="modal-header-text">Add New Favorite</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
    {
        userGames.filter(game => !game.favoriteRanking).length
        ? <ModalBody style={{overflow: 'auto'}}>
            {
                userGames
                    .filter(game => !game.favoriteRanking)
                    .sort((a, b) => a.gameSingle.name.localeCompare(b.gameSingle.name))
                    .map(game => {
                    // console.log(`${game.id}.)${game.name} - ${game.timeCategoryId}`)
                    
                    return <div key={game.id} 
                            className="game-card modal-game-card"
                            style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                        >
                        <div className="game-card-options-row">
                        <p className="game-title">{game.gameSingle.name}</p>
                            <BiPlus className="game-card-option" onClick={() => {
                                
                                const gameWithHighestFavoriteRank = favorites.reduce((prev, current) => {
                                    return prev.favoriteRanking > current.favoriteRanking ? prev : current;
                                }, { favoriteRanking: 0 });

                                const gameToUpdate = {...game}
                                if (gameWithHighestFavoriteRank.favoriteRanking < 11) {
                                    gameToUpdate.favoriteRanking = 11
                                } else {
                                    gameToUpdate.favoriteRanking = gameWithHighestFavoriteRank.favoriteRanking + 1
                                }
                                const userGamesCopy = [...userGames]
                                userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                                setUserGames(userGamesCopy)

                                putUserGame(gameToUpdate)
                            }}/>
                        </div>
                    </div>
                })
            }
        </ModalBody>
        : <ModalBody style={{overflow: 'auto'}}>
            <p className="game-row-alt-text">All games have been favorited. Add new games to add new favorites.</p>
            <Button className="modal-footer-button confirm" onClick={() => navigate("/addgames")}>Go to Add Games Page</Button>
        </ModalBody>
    }
    </Modal>
</>
}