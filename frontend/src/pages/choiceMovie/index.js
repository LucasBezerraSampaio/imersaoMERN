import { useEffect, useState } from 'react'
import { Container } from './styled.js'
import { Background } from '../../components/styled/background.js'
import Header from '../../components/commom/header/index.js'
import BoxMovie from '../../components/commom/boxMovie/index.js'
import Api from '../../services/api.js'

const api = new Api()

export default function ChoiceMovie() {
    const [movies, setMovies] = useState([])
    const [date, setDate] = useState('2021-12-14')

    console.log(movies)

    const listar = async () => {
        let movies = await api.listar(date);
        setMovies(movies)
    }
          

    useEffect(() => {
        listar()
    }, [])
    
    return(
        <Background>
            <Container>
                <Header headerText="Selecione o filme que deseja assistir"/>
                <div className="content">
                    {movies.map((item) =>
                         <BoxMovie info={item}/>
                    )}    
                </div>    
            </Container>
        </Background>
    )
}