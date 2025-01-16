import feliz2025 from '../../assets/feliz2025.png';
import s from './header.module.scss';
export default function Header() {
    return (
        <header className={s.header}>

            <section>
                <img src={feliz2025} alt="imagem escrita feliz 2025" />
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li>Paz</li>
                    <li>Saúde</li>
                    <li>Alegria</li>
                </ul>
            </nav>
        </header>
    )
}