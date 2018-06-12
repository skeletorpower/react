

const initState = {
    gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    currentPlayer: 1,
    counterX: 0,
    counterO: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}



export default reducer;