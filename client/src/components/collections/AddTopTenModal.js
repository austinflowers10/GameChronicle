import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { putUserGame } from "../../managers/userGameManager";
import { BiChevronsUp, BiX } from "react-icons/bi";

export const AddTopTenModal = ({setUserGames, userGames, favorites}) => {
    const [modal, setModal] = useState(false)
    const [chosenOtherFavorite, setChosenOtherFavorite] = useState(null)
    
    const toggle = () => setModal(!modal);

    return <>
        <BiChevronsUp className="page-header-icon other-favorites" onClick={toggle}/>
        <Modal 
            contentClassName="add-top-ten-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <div className="modal-header-row">
            <p className="modal-header-text">Add a Favorite to Top Ten</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
            <ModalBody>
                <p>Select a game to add to your Top Ten:</p> 
                <div className="favorites-select-row">
                <fieldset className="fieldset-input-row">
                    <label className="other" htmlFor="add-top-ten-select">Other Favorites:</label>
                    <select className="input select" id="add-top-ten-select"
                        onChange={(event) => {
                            setChosenOtherFavorite(
                                favorites.find(f => f.id === parseInt(event.target.value))
                            )
                        }}
                    >
                        <option className="dropdown-option" value="">None Selected</option>
                        {
                            favorites
                                .filter((f) => f.favoriteRanking > 10)
                                .sort((a, b) => b.favoriteRanking - a.favoriteRanking)
                                .map((game) => {
                                    return <option className="dropdown-option" value={game.id}>{game.gameSingle.name}</option>
                            })

                        }
                    </select>  
                </fieldset>
                </div>
            </ModalBody>
            <div className="modal-footer-row">
                <Button  className="modal-footer-button confirm" disabled={!chosenOtherFavorite} onClick={() => {
                    if (chosenOtherFavorite) {
                        const gameWithHighestTopTenRank = favorites
                            .filter((f) => f.favoriteRanking <= 10 && f.favoriteRanking >= 1)
                            .reduce((prev, current) => {
                            return prev.favoriteRanking > current.favoriteRanking ? prev : current;
                          }, { favoriteRanking: 0 });

                        const otherFavoriteToUpdate = {...chosenOtherFavorite}
                        otherFavoriteToUpdate.favoriteRanking = gameWithHighestTopTenRank.favoriteRanking + 1
                        
                        const userGamesCopy = [...userGames]
                        userGamesCopy[userGames.indexOf(chosenOtherFavorite)] = otherFavoriteToUpdate     
                        setUserGames(userGamesCopy)

                        putUserGame(otherFavoriteToUpdate)
                        
                        setChosenOtherFavorite(null)

                        toggle()
                    }

                    // const gameToUpdate = {...game}
                    // gameToUpdate.replayabilityRating = null
                    // putUserGame(gameToUpdate)

                    // toggle()
                }}>
                    Add
                </Button>{' '}
                <Button className="modal-footer-button cancel" color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </div>
        </Modal>
    </>
}
