export const fetchApiCharacterById = async (dispatch, id) => {
    dispatch({ type: "LOADING" });

    try {
        const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        const response = await res.json();

        dispatch({ type: "GET_CHARACTER_BY_ID", payload: response });
        dispatch({ type: "GET_TRANSFORMATIONS", payload: response.transformations });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
    }
};
