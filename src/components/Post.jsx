import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from  './Post.module.css';

export function Post({ author, publicshedAt, content }){
const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
])

const [newCommentText, setNewCommentText] = useState('')

const publicshedAtDateFormatted = format(publicshedAt, "d 'de' LLLL 'ás' HH:mm'h'", 
{locale: ptBR})

const publicshedDateRelativeToNow = formatDistanceToNow(publicshedAt, {
    locale: ptBR,
    addSuffix: true,
})
 
function handleCreatNewComment() {
    //função para impedir o comportamento padrão de redirecionar a pagina
    event.preventDefault()
    
    //esse sinal "..." indica que tal variavel ira ler todos os valores daquela variavel
    setComments([...comments, newCommentText]);
    setNewCommentText('')
}

function handleNewCommentChange() {

    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
}

function deleteComment(commentToDelete) {

    const commentsWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne);
}

function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')

}

const isNewCommentImput = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publicshedAtDateFormatted} dateTime={publicshedAt.toISOString()}>
                    {publicshedDateRelativeToNow}
                </time>     
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type == 'link') {
                        return <p key={line.content}><a href=""></a>{line.content}</p>
                    }
                })}  
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentImput}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />)
               })}
            </div>
        </article>
    )
}