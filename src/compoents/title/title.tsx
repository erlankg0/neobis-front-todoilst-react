import styles from './title.module.css'

interface IName {
    name: string
}

const Title = ({name}: IName) => {

    return (
        <div className={styles.content}>
            <p className='title'>What's up,</p>
            <input value={name} />
        </div>
    )
}

export {Title}
