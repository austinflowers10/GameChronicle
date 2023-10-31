import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { putUserGame } from "../../managers/userGameManager";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";

export const AddNewFavoriteModal = ({ userGames, setUserGames, favorites}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const toggle = () => setModal(!modal);

    return <>
    <BiPlus onClick={toggle}/>
    <Modal 
        contentClassName="add-new-favorite-modal"
        isOpen={modal}
        toggle={toggle}
    >
    <ModalHeader toggle={toggle}>Add New Favorite</ModalHeader>
    {
        userGames.filter(game => !game.favoriteRanking).length
        ? <ModalBody style={{overflow: 'auto'}}>
            {
                userGames
                    .filter(game => !game.favoriteRanking)
                    .sort((a, b) => a.gameSingle.name.localeCompare(b.gameSingle.name))
                    .map(game => {
                    // console.log(`${game.id}.)${game.name} - ${game.timeCategoryId}`)
                    
                    return <div key={game.id} id={`toggler--${game.id}`} className="new-favorite-game-card">               
                        <img className="game-image"src={game.gameSingle.background_image}/>
                        <p className="game-title">{game.gameSingle.name}</p>
                        <BiPlus onClick={() => {
                            
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
                })
            }
        </ModalBody>
        : <ModalBody style={{overflow: 'auto'}}>
            <p>All games have been favorited. Add new games to add new favorites.</p>
            <Button onClick={() => navigate("/addgames")}>Go to Add Games Page</Button>
        </ModalBody>
    }
        <ModalFooter></ModalFooter>
    </Modal>
</>
}