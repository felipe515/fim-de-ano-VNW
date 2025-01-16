import linkedin from '../../assets/logoLinkedin.png';
import face from '../../assets/logoFacebook.png';
import insta from '../../assets/logoInstagram.png';
import s from './footer.module.scss';
export default function Footer() {
    return (
        <footer>
            <section>
                <img src={linkedin} alt="" />
                <img src={face} alt="" />
                <img src={insta} alt="" />
            </section>
        </footer>
    )
}