import { Container } from "./styled.js";

export default function BoxMovie(props) {
    return(
        <Container>
            <img className="img-movie" src={props.info.filme.capa} alt="movie"/>
            <div className="align-text">
                <div className="title-movie"> {props.info.filme.nome} </div>
                <div>
                    <div className="desc"> {props.info.filme.idiomas} </div>
                    <div className="desc"> Classificação: {props.info.filme.classificacao} </div>
                </div>
            </div>
        </Container>
    )
}