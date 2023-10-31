import { Modal, ModalHeader, ModalBody, ModalFooter, Button, UncontrolledCollapse } from "reactstrap";
import { putUserGame } from "../../managers/userGameManager";
import { useNavigate } from "react-router-dom";

export const AddFromHistoryModal = ({modal, toggle, userGames, timeCategories, updateCategoryOnGame}) => {
    const navigate = useNavigate()
    return <>
    <Modal 
        contentClassName="add-from-history-modal"
        isOpen={modal}
        toggle={toggle}
    >
    <ModalHeader toggle={toggle}>Add Game from History</ModalHeader>
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
                    
                    return <div key={game.id} id={`toggler--${game.id}`} className="history-game-card">
                        <div className="history-game-card-left">
                        <img className="game-image"src={game.gameSingle.background_image}/>
                        <p className="game-title">{game.gameSingle.name}</p>
                        </div>
                        <UncontrolledCollapse horizontal toggler={`#toggler--${game.id}`}>
                        <div className="history-game-card-right">
                            {
                            timeCategories.map(timeCategory => {
                                return timeCategory.id !== 5 &&
                                <Button key={timeCategory.id} 
                                    className="history-modal-category-button"
                                    onClick={() => {
                                        updateCategoryOnGame(game, timeCategory.id)

                                        const gameToUpdate = {...game}
                                        gameToUpdate.timeCategoryId = timeCategory.id
                                        putUserGame(gameToUpdate)
                                    }}
                                >{timeCategory.name}</Button>
                            }) 
                            }
                        </div>
                        </UncontrolledCollapse> 
                    </div>
                })
            }
        </ModalBody>
        : <ModalBody style={{overflow: 'auto'}}>
            <p>You currently have no games in History</p>
            <Button onClick={() => navigate("addgames")}>Go to Add Games Page</Button>
        </ModalBody>
    }
        <ModalFooter></ModalFooter>
    </Modal>
</>
}