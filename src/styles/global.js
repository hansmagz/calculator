import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        transition: all 0.25s linear;
        background: ${({ theme }) => theme.background};
    }

    .app {
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
    }

    .calculator-grid {
        width: 100%;
        overflow: hidden;
        max-width: ${({ theme }) => theme.maxWidth};
        background-color: ${({ theme }) => theme.primary};
        border-radius: ${({ theme }) => theme.borderRadius};
    }

    .output {
        text-align: right;
        word-wrap: break-word;
        word-break: break-all;
        padding: ${({ theme }) => theme.defaultPadding};
        background-color: ${({ theme }) => theme.primary};
        min-height: ${({ theme }) => theme.outputMinHeight};
    }

    .output .previous-operand {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.secondaryTextColor};
    }

    .output .current-operand {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.textColor};
    }

    .buttons-container {
        display: flex;
        flex-wrap: wrap;
        padding: ${({ theme }) => theme.defaultPadding};
        background-color: ${({ theme }) => theme.secondary};
        border-radius: ${({ theme }) => theme.borderRadius};
    }

    .buttons-container>button {
        cursor: pointer;
        appearance: none;
        overflow: none;
        border: none;
        font-size: 1.6rem;
        padding: 20px;
        margin: 2%;
        transition: 0.4s;
        flex: 1 1 21%;
        max-width: 21%;
        border-radius: 15px;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.accent};
    }

    .operation {
        color: ${({ theme }) => theme.operationColor};
    }

    .buttons-container>button.operation-button {
        color: ${({ theme }) => theme.operationColor};
    }

    .buttons-container>button.special-button {
        color: ${({ theme }) => theme.specialColor};
    }

    .buttons-container>button:hover {
        background-color: ${({ theme }) => theme.accentHover};
    }
`