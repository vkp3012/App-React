const setMode = mode => {
    return {
        type : "SET_MODE",
        payload : mode
    }
}

const setColor = color => {
    return {
        rype : "SET_COLOR",
        payload : color
    }
}

const getTheme = () => {
    return {
        type : "GET_THEME"
    }
}

const exportDefault = {
    setMode,
    setColor,
    getTheme
}

export default exportDefault;