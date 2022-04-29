import LogoUtt from '../../assets/images/logo-utt.png';
import { WelcomPage } from './style';
import { useNavigate } from 'react-router-dom';

export const AboutApp = () =>{

    const navigate = useNavigate();

    const handleClick = () => navigate('/home');

    return(
        <WelcomPage>
            <img src={ LogoUtt } alt="logo utt" />
            <div className="text">
                <p>Queremos ayudarte en cada momento.</p>
                <p>Por eso creamos esta pagina de ayuda.</p>
                <p>Aqui encontraras una lista de posibles fallas dentro del examen. Si tu cituación no aparece en la lista o no logras resolver tu problema, sientete libre de acudir a nostros.</p>
            </div>
            <button onClick={ handleClick } >Continuar</button>
        </WelcomPage>

    )
}