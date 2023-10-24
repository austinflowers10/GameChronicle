import { Modal, ModalHeader, ModalBody, ModalFooter, Button, UncontrolledCollapse } from "reactstrap";

export const AddFromHistoryModal = ({modal, toggle, userGames, timeCategories, updateCategoryOnGame}) => {

    return <>
    <Modal 
        contentClassName="add-from-history-modal"
        isOpen={modal}
        toggle={toggle}
    >
    <ModalHeader toggle={toggle}>Add Game from History</ModalHeader>
        <ModalBody style={{overflow: 'auto'}}>
            {
                userGames.filter(game => game.timeCategoryId === 5).map(game => {
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
                                    onClick={() => {updateCategoryOnGame(game, timeCategory.id)}}
                                >{timeCategory.name}</Button>
                            }) 
                            }
                        </div>
                        </UncontrolledCollapse> 
                    </div>
                })
            }
        </ModalBody>
        <ModalFooter></ModalFooter>
    </Modal>
</>
}