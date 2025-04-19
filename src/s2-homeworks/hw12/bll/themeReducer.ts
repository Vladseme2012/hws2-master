export type InitStateType = {
    themeId: number
}

const initState: InitStateType = {
    themeId: 1,
};

export const themeReducer = (state = initState, action: ThemeActionType): InitStateType => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.themeId};
        }
        default:
            return state;
    }
};

type ThemeActionType = {
    type: 'SET_THEME_ID'
    themeId: number
}

export const changeThemeId = (id: number): ThemeActionType => ({type: 'SET_THEME_ID', themeId: id});
