import { useState } from "react";
import { CardContainer,TextContent } from "./styles";
import { Details } from "../Details";

export interface ContentProps {
    apparition?: string;
    description?: string;
}

interface MarvelProps {
    id:string
    name: string;
    description: string;
    img: {
      path: string;
      extension: string;
    },
        image:string;
        nameModal:string;
        content:ContentProps;
}


export function Card({id,name,description,img,image,nameModal,content}:MarvelProps){
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const imgUrl = `${img.path}.${img.extension}`;

   console.log('outro teste', content)

    return(
        <CardContainer>
            <div>
                <div>
                    <img src={imgUrl} />
                 </div>
                 <TextContent>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <p onClick={handleOpen}>ver detalhes</p>
                 </TextContent>
            </div>
            <Details 
            id={id}
            image={image}
            nameModal={nameModal}
            content={content}
            open={open} 
            handleClose={handleClose}/>
        </CardContainer>
    )
}