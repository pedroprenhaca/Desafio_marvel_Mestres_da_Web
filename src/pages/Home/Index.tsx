import { useState } from "react";
import { Card } from "../../components/Card";
import { HomeContainer } from "./styles";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export interface  CharactersProps{
    id:string;
    name:string;
    description:string;
    thumbnail:{
        path:string;
        extension:string;
    }
    details:{
        image:string;
        nameModal:string;
        content:{
            apparition?:string
            descripiton?:string
        }
    }
}


export function Home( ) {
    const [characters] = useState<CharactersProps[]>([
        {
            id: "1",
            name: "Wanda Maximoff",
            description: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
            thumbnail: {
                path: "https://m.media-amazon.com/images/I/61g3fQM-bQS._AC_UF894,1000_QL80_.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://m.media-amazon.com/images/I/61g3fQM-bQS._AC_UF894,1000_QL80_.jpg",
                nameModal:"Wanda Maximoff",
                content:{
                    apparition:"Vingadores - Era de Ultron Capitão América - Guerra Civil Vingadores - Guerra Infinita Vingadores - Ultimato WandaVision"
                }
            }
        },
       
        {
            id: "2",
            name: "Thanos",
            description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
            thumbnail: {
                path: "https://cdn.europosters.eu/image/750/telas-avengers-infinity-war-thanos-fragmented-i111368.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://cdn.europosters.eu/image/750/telas-avengers-infinity-war-thanos-fragmented-i111368.jpg",
                nameModal:"Thanos",
                content:{
                    apparition:"Vingadores Guardiões da Galáxia - vol. I Vingadores - Guerra Infinita Vingadores - Ultimato "
                }
            }
        },
        
        {   
            id: "3",
            name: "Hulk",
            description: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
            thumbnail: {
                path: "https://m.media-amazon.com/images/I/61D3Kg-apuL._AC_UF894,1000_QL80_DpWeblab_.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://m.media-amazon.com/images/I/61D3Kg-apuL._AC_UF894,1000_QL80_DpWeblab_.jpg",
                nameModal:"Hulk",
                content:{
                    apparition:"Vingadores Vingadores - Era de Ultron Thor - Ragnarok Vingadores - Guerra Infinita Vingadores - Ultimato "
                }
            }
        },
        {
            id: "4",
            name: "Homem Aranha",
            description: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
            thumbnail: {
                path: "https://i.pinimg.com/736x/4b/77/e0/4b77e08935763c2d761072185062bc61.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://i.pinimg.com/736x/4b/77/e0/4b77e08935763c2d761072185062bc61.jpg",
                nameModal:"Homem Aranha",
                content:{
                    apparition:"Homem-Aranha O Espetacular Homem-Aranha Capitão América: Guerra Civil Vingadores: Guerra Infinita Homem-aranha: Longe de casa"
                }
            }
        },
    ])
    
    

    return(
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}   
        spaceBetween={10}    
        navigation
        scrollbar={{ draggable: true }}
    >
                {characters.map(character =>{
                    return( 
                        <SwiperSlide key={character.id}>
                            <HomeContainer>
                                <Card
                                    id = {character.id}
                                    name= {character.name}
                                    description= {character.description}
                                    img= {character.thumbnail}
                                    image={character.details.image}
                                    nameModal={character.details.nameModal}
                                    content = {character.details.content}
                                    />
                                </HomeContainer>
                            </SwiperSlide>   
                        )
                    })}
        </Swiper>
    )
}