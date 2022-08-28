import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    function hendleDeleteComment(){

        onDeleteComment(content)

    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/90021073?v=4" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cairon Henrique</strong>
                            <time title='25 de Agosto ás 07:20h' dateTime='2022-08-25 07:20:23 '>Cerca de uma hora atras</time>
                        </div>

                        <button onClick={hendleDeleteComment} title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}