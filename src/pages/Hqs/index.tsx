import { useState } from "react";
import { Card } from "../../components/Card";
import { SwiperSlide,Swiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { HqsContainer } from "./styles";

export interface  HqsProps{
    id:string;
    name:string;
    description:string;
    thumbnail:{
        path:string;
        extension:string;
    }
}

export function Hqs(){

    const [hqs] = useState<HqsProps[]>([
       
        {
            id: "9",
            name: "O Espetacular Homem-Aranha",
            description: "O passado e o presente vão colidir numa edição monumental, e a pergunta que todos estão fazendo é: o que aconteceu com Mary Jane? Em seguida, continua o Fim do Aranhaverso! o Homem-Aranha mudou. Seus poderes estão em seu máximo, mas será que seu corpo é capaz de aguentá-los?",
            thumbnail: {
                path: "https://m.media-amazon.com/images/I/A1f5-Gc+b3L._AC_UF1000,1000_QL80_.jpg",
                extension: "jpg",
            },
        },
       
        {
            id: "10",
            name: "Thor: Vikings",
            description: "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
            thumbnail: {
                path: "https://images.justwatch.com/poster/312863595/s718/captain-america-the-first-avenger.jpg",
                extension: "jpg",
            },
        },
        
        {   
            id: "11",
            name: "Surfista Prateado:Parábola",
            description: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
            thumbnail: {
                path: "https://m.media-amazon.com/images/I/81vTHovrz+L._AC_UF894,1000_QL80_.jpg",
                extension: "jpg",
            },
        },
        {
            id: "12",
            name: "Wolverine: Origens",
            description: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
            thumbnail: {
                path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMx7Vy_4uTgyoHPFxugqKHQXTVpenL8ZdL2Bo4FLDNLUh285uc2Xg8GoPYgKbP1b2zpJTTUJg_9sZl-DARmLGLYM73wZQFYtuICPjH2iu_IXN-udDYbL3Osi1yOHKnVcvze0fZ_uSeBnN0/s1600/Iron+3.jpg",
                extension: "jpg",
            },
        },

    ]);
    
    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
             slidesPerView={3}   
             spaceBetween={10}    
             navigation
             scrollbar={{ draggable: true }}
        >
           {hqs.map(hq =>{
            return(
                <SwiperSlide>
                    <HqsContainer>
                        <Card                        
                            key={hq.id}
                            id={hq.id}
                            name={hq.name}
                            description={hq.description}
                            img={hq.thumbnail}
                        />
                    </HqsContainer>
                </SwiperSlide>
            )
           })}
        </Swiper>
    )
}