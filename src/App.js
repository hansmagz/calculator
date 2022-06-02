import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Calculator from './containers/Calculator'
import ToggleSwitch from './components/ToggleSwitch'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'

const App = () => {
    const context = useContext(ThemeContext);
    const { theme } = context;

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Calculator />
            <ToggleSwitch />
        </ThemeProvider>
    )
}

export default App