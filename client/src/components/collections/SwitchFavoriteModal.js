import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useEffect, useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { putUserGame } from "../../managers/userGameManager";
import { BiX } from "react-icons/bi";

export const SwitchFavoriteModal = ({setUserGames, userGames, favorites}) => {
    const [modal, setModal] = useState(false)
    const [chosenOtherFavorite, setChosenOtherFavorite] = useState(null)
    const [chosenTopFavorite, setChosenTopFavorite] = useState(null)
    
    const toggle = () => setModal(!modal);

    return <>
        <HiOutlineSwitchHorizontal className="page-header-icon" onClick={toggle}/>
        <Modal 
            contentClassName="switch-favorites-modal"
            isOpen={modal}
            toggle={toggle}
        >
        <div className="modal-header-row">
            <p className="modal-header-text">Switch Favorites</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
            <ModalBody>
                <p>Select a game to replace one of your Top Ten:</p> 
                <div className="favorites-select-row">
                <fieldset className="fieldset-input-row">
                    <label htmlFor="top-ten-select">Top Ten:</label>
                    <select className="input select" id="top-ten-select"
                        onChange={(event) => {
                            setChosenTopFavorite(
                                favorites.find(f => f.id === parseInt(event.target.value))
                            )
                        }}
                    >
                        <option className="dropdown-option" value="">None Selected</option>
                        {
                            favorites
                                .filter((f) => f.favoriteRanking <= 10 && f.favoriteRanking >= 1)
                                .sort((a, b) => a.favoriteRanking - b.favoriteRanking)
                                .map((game) => {
                                    return <option className="dropdown-option" value={game.id}>{game.gameSingle.name}</option>
                            })

                        }
                    </select>  
                </fieldset>
                <HiOutlineSwitchHorizontal className="modal-switch-icon"/>
                <fieldset className="fieldset-input-row">
                    <label htmlFor="other-select">Other Favorites:</label>
                    <select className="input select" id="other-select"
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
                <Button className="modal-footer-button confirm" disabled={!chosenTopFavorite && chosenOtherFavorite} onClick={() => {
                    if (chosenTopFavorite && chosenOtherFavorite) {
                        const gameWithHighestFavoriteRank = favorites.reduce((prev, current) => {
                            return prev.favoriteRanking > current.favoriteRanking ? prev : current;
                          });

                        const otherFavoriteToUpdate = {...chosenOtherFavorite}
                        otherFavoriteToUpdate.favoriteRanking = chosenTopFavorite.favoriteRanking

                        const topFavoriteToUpdate = {...chosenTopFavorite}
                        topFavoriteToUpdate.favoriteRanking = gameWithHighestFavoriteRank.favoriteRanking + 1
                        
                        const userGamesCopy = [...userGames]
                        userGamesCopy[userGames.indexOf(chosenOtherFavorite)] = otherFavoriteToUpdate
                        userGamesCopy[userGames.indexOf(chosenTopFavorite)] = topFavoriteToUpdate
                                            
                        setUserGames(userGamesCopy)

                        putUserGame(otherFavoriteToUpdate)
                            .then(() => {putUserGame(topFavoriteToUpdate)})
                        
                        setChosenOtherFavorite(null)
                        setChosenTopFavorite(null)

                        toggle()
                    }

                    // const gameToUpdate = {...game}
                    // gameToUpdate.replayabilityRating = null
                    // putUserGame(gameToUpdate)

                    // toggle()
                }}>
                    Replace
                </Button>{' '}
                <Button className="modal-footer-button cancel" onClick={toggle}>
                    Cancel
                </Button>
            </div>
        </Modal>
    </>
}

