import './myStyles.css'
import styles from './moduleStyle.module.css'
export const Stylesheet = () => {
    const style = {
        color:'blue'
    }
  return (
    <>
        <h1 className='primary'>CSS Stylesheets</h1>
        <h1 style={style}>Inline styling</h1>
        <h1 className={styles.success}>Module styling</h1>
    </>
  )
}
