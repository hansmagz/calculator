const globalTheme = {
    switchWidth: '60px',
    switchHeight: '30px',
    switchPadding: '3px',
    switchAnimationDuration: '0.2s',
    borderRadius: '30px',
    maxWidth: '400px',
    outputMinHeight: '137px',
    defaultPadding: '2em',
    operationColor: '#2196f3',
    specialColor: '#21cb72',
}

export const lightTheme = {
    primary: '#FFF',
    secondary: '#F9F9F9',
    accent: '#F0f0f0',
    accentHover: '#d0d0d0',
    textColor: '#2a2a2a',
    secondaryTextColor: '#666',
    background: '#ccc',
    ...globalTheme
}

export const darkTheme = {
    primary: '#22252D',
    secondary: '#292D36',
    accent: '#262931',
    accentHover: '#20232a',
    textColor: '#fff',
    secondaryTextColor: '#bdbdbd',
    background: '#424242',
    ...globalTheme
}