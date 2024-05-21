import Modal from '@mui/material/Modal';
import { ModalBoxContainer,ImgContainer, ContentContainer } from './styles';
import { IoCloseCircleOutline } from "react-icons/io5";
import { ContentProps } from '../Card';

interface DetailsProps {
    id:string;
    image:string;
    nameModal:string;
    content:ContentProps;
    open: boolean;
    handleClose: () => void;
  }


export function Details({id,image,nameModal,content,open,handleClose}:DetailsProps){
    return(
    <div>

        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBoxContainer>
                <div>
                    <ImgContainer>
                            <img src={image} />                
                        </ImgContainer> 
                        <ContentContainer>
                            <h1>{nameModal}</h1>
                            { content.apparition 
                                ? <p>{content.apparition}</p> 
                                : <p>{content.description}</p>}
                            <label>Avaliações dos Fãs</label>
                            <IoCloseCircleOutline onClick={handleClose}/>
                                
                        </ContentContainer>
                </div>
            </ModalBoxContainer>
        </Modal>
        
    </div>
    )
}