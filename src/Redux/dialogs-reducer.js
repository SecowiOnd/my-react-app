const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Dio", photoUrl: "https://vignette.wikia.nocookie.net/unanything/images/9/9a/638771CC-8977-4AA9-96BE-741D96CDF3E1.jpeg/revision/latest/scale-to-width-down/340?cb=20190825143621" },
        { id: 2, name: "Jotaro", photoUrl: "https://diskomir.ru/upload/iblock/79a/79a7e4ef1582a9f30df77bd8771266c8.jpg" },
        { id: 3, name: "Kars", photoUrl: "https://vignette.wikia.nocookie.net/jjba/images/e/e1/Kars_lol.png/revision/latest/top-crop/width/300/height/300?cb=20160521002833" },
        { id: 4, name: "Wamuu", photoUrl: "https://pbs.twimg.com/profile_images/903231046736527362/Zz65TSGh_400x400.jpg" },
        { id: 5, name: "Caesar", photoUrl: "https://img09.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg" },
        { id: 6, name: "Jean Pierre", photoUrl: "https://i.pinimg.com/originals/10/93/33/109333d6165d1021b63fb8c7c2ec4342.png" }
    ],
    messages: [
        { id: 1, message: "Wryy" },
        { id: 2, message: "menacing" },
        { id: 3, message: "Oraoraora" },
        { id: 4, message: "Konodioda" },
        { id: 5, message: "mudamudamuda" }
    ]
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            return { 
                ...state, 
                messages: [...state.messages, {id:6, message: newMessage}] 
            };
            
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReduser;