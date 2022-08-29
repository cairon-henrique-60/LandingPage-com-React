import styles from './Header.module.css';

import igniteLogo from '../imagens/ignitlogo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite no cabeçalho" />
        </header>
    );
}