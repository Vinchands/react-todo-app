import AppContainer from '@components/AppContainer/AppContainer'
import ThemeButton from '@components/ThemeButton/ThemeButton'
import Title from '@components/Title/Title'
import './App.css'

export default function App() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-bl from-white to-fuchsia-400 p-3 dark:from-slate-900 dark:to-sky-950'>
            <AppContainer>
                <Title />
            </AppContainer>
            <ThemeButton />
        </div>
    )
}
