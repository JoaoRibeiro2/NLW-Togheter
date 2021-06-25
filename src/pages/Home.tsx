import {useHistory} from 'react-router-dom'
import {firebase, auth} from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
//  webpack {snowpack, vite}
// Module Bundler 
import { Button } from '../components/Button'

import '../styles/auth.scss'

export function Home(){
    const history = useHistory();
    function handleCreateRoom(){

         history.push('/rooms/new')
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q &amp; A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real </p>
            </aside>
            <main>
                <div className="main-content">
                   <img src={logoImg} alt="Letmeask" />
                   <Button onClick={handleCreateRoom} className="create-room">
                       <img src={googleIconImg} alt="Logo do google" />
                       Crie sua sala com o Google
                   </Button>
                   <div className="separator">ou entre em uma sala</div>
                   <form>
                       <input 
                       type="text"
                       placeholder="Digite o código da Sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                   </form>
                </div>           
            </main>
        </div>
    )
}

// Sempre criar os Elementos para depois estilizalos