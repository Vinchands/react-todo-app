import reactSvg from '@assets/react.svg'
import './Title.css'

export default function Title() {
    return (
        <div className='title-container'>
            <h1 className='title-text'>Todo App</h1>
            <img src={ reactSvg } alt='React Logo' className='title-logo' />
        </div>
    )
}