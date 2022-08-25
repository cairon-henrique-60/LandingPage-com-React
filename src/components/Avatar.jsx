import styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src }) {
    return (
        /*
        aqui usamos uma condiçao ternario para verificar os momento 
        que devo usar bordar nas fotos e a hora que nao devo
        */

        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.Avatar} 
            src={src} 
        />
    );
}