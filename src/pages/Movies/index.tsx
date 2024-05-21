import {useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Card } from "../../components/Card";
import { SwiperSlide,Swiper } from "swiper/react";
import { MovieContainer } from "./styles";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export interface  MoviesProps{
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


export function Movies(){
    
    const [movies] = useState<MoviesProps[]>([
        {
            id: "5",
            name: "Capitão América",
            description: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.",
            thumbnail: {
                path: "https://images.justwatch.com/poster/312863595/s718/captain-america-the-first-avenger.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://images.justwatch.com/poster/312863595/s718/captain-america-the-first-avenger.jpg",
                nameModal:"Capitão América",
                content:{
                    descripiton:"Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo."
                }
            }
        },
        
        {   
            id: "6",
            name: "Homem de Ferro",
            description: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
            thumbnail: {
                path: "https://m.media-amazon.com/images/I/81vTHovrz+L._AC_UF894,1000_QL80_.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://m.media-amazon.com/images/I/81vTHovrz+L._AC_UF894,1000_QL80_.jpg",
                nameModal:"Homem de Ferro",
                content:{
                    descripiton:"Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história."
                }
            }
        },
        {
            id: "7",
            name: "Homem de Ferro 2",
            description: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
            thumbnail: {
                path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMx7Vy_4uTgyoHPFxugqKHQXTVpenL8ZdL2Bo4FLDNLUh285uc2Xg8GoPYgKbP1b2zpJTTUJg_9sZl-DARmLGLYM73wZQFYtuICPjH2iu_IXN-udDYbL3Osi1yOHKnVcvze0fZ_uSeBnN0/s1600/Iron+3.jpg",
                extension: "jpg",
            },
            details:{
                image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMx7Vy_4uTgyoHPFxugqKHQXTVpenL8ZdL2Bo4FLDNLUh285uc2Xg8GoPYgKbP1b2zpJTTUJg_9sZl-DARmLGLYM73wZQFYtuICPjH2iu_IXN-udDYbL3Osi1yOHKnVcvze0fZ_uSeBnN0/s1600/Iron+3.jpg",
                nameModal:"Homem de Ferro 2",
                content:{
                    descripiton:"O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas"
                }
            }
        },

        {
            id: "8",
            name: "Thor",
            description: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
            thumbnail: {
                path: "https://vejasp.abril.com.br/wp-content/uploads/2016/12/21003751_20130506190027608.jpeg?quality=70&strip=info&w=429&w=636",
                extension: "jpg",
            },
            details:{
                image:"https://vejasp.abril.com.br/wp-content/uploads/2016/12/21003751_20130506190027608.jpeg?quality=70&strip=info&w=429&w=636",
                nameModal:"Thor",
                content:{
                    descripiton:"Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos."
                }
            }
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
             
            
                {movies.map(movie=>{
                    return(
                        <SwiperSlide>
                            <MovieContainer>
                                <Card
                                id={movie.id}
                                key={movie.id}
                                name={movie.name}
                                description={movie.description}
                                img={movie.thumbnail}
                                image={movie.details.image}
                                nameModal={movie.details.nameModal}
                                content={movie.details.content}
                                />
                            </MovieContainer>
                        </SwiperSlide>
                    )
                })}
    </Swiper>
    )
}