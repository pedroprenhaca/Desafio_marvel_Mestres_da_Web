import { CardContainer,TextContent } from "./styles";

export function Card(){
    return(
        <CardContainer>
            <div>
                <div>
                    <img src="https://images.unsplash.com/photo-1559535332-db9971090158?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                 <TextContent>
                    <h1>Baby Groot</h1>
                    <h2>Groot é um indivíduo senciente similar a uma árvore
                        e frequente cúmplice do criminoso intergalático Rocket Raccoon. Juntos, a dupla se juntou aos Guardiões da Galáxia.</h2>
                    <p>ver detalhes</p>
                 </TextContent>
            </div>
        </CardContainer>
    )
}