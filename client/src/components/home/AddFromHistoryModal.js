import { Modal, ModalHeader, ModalBody, ModalFooter, Button, UncontrolledCollapse } from "reactstrap";
import { putUserGame } from "../../managers/userGameManager";
import { useNavigate } from "react-router-dom";
import { BiX } from "react-icons/bi";

export const AddFromHistoryModal = ({modal, toggle, userGames, timeCategories, updateCategoryOnGame}) => {
    const navigate = useNavigate()
    return <>
    <Modal 
        contentClassName="add-from-history-modal"
        isOpen={modal}
        toggle={toggle}
    >
        <div className="modal-header-row">
            <p className="modal-header-text">Add Game from History</p>
            <BiX className="modal-x-icon" onClick={toggle}/>
        </div>
    {
        userGames.filter(game => game.timeCategoryId === 5).length
        ? <ModalBody style={{overflow: 'auto'}}>
            {
                userGames
                    .filter(game => game.timeCategoryId === 5)
                    .sort((a, b) => {
                        if (a.dateFinished === null) return 1;
                        if (b.dateFinished === null) return -1;
                        return new Date(b.dateFinished) - new Date(a.dateFinished);
                      })
                    .map(game => {
                    // console.log(`${game.id}.)${game.name} - ${game.timeCategoryId}`)
                    
                    return <div key={game.id} 
                                className="game-card modal-game-card"
                                style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                        >
                        <div className="game-card-options-row">
                        <p className="game-title">{game.gameSingle.name}</p>
                        <div className="game-card-options">
                            {
                            timeCategories.map(timeCategory => {
                                return timeCategory.id !== 5 &&
                                <div key={timeCategory.id} 
                                    className="game-card-option"
                                    onClick={() => {
                                        updateCategoryOnGame(game, timeCategory.id)

                                        const gameToUpdate = {...game}
                                        gameToUpdate.timeCategoryId = timeCategory.id
                                        putUserGame(gameToUpdate)
                                    }}
                                >
                                    <span className="game-card-option-numbers">{timeCategory.id}</span>
                                </div>
                            }) 
                            }
                        </div>
                    </div>
                </div>
                })
            }
        </ModalBody>
        : <ModalBody style={{overflow: 'auto'}}>
            <p>You currently have no games in History</p>
            <Button onClick={() => navigate("addgames")}>Go to Add Games Page</Button>
        </ModalBody>
    }
    </Modal>
</>
}