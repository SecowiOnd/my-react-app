const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT";

let initialState ={
    dialogs: [
        { id: 1, name: "Dio", img: "https://vignette.wikia.nocookie.net/unanything/images/9/9a/638771CC-8977-4AA9-96BE-741D96CDF3E1.jpeg/revision/latest/scale-to-width-down/340?cb=20190825143621" },
        { id: 2, name: "Jojo", img: "https://diskomir.ru/upload/iblock/79a/79a7e4ef1582a9f30df77bd8771266c8.jpg" },
        { id: 3, name: "Kars", img: "https://vignette.wikia.nocookie.net/jjba/images/e/e1/Kars_lol.png/revision/latest/top-crop/width/300/height/300?cb=20160521002833" },
        { id: 4, name: "Wamuu", img: "https://pbs.twimg.com/profile_images/903231046736527362/Zz65TSGh_400x400.jpg" },
        { id: 5, name: "Caesar", img: "https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg" },
        { id: 6, name: "Jean Pierre", img: "https://i.pinimg.com/originals/10/93/33/109333d6165d1021b63fb8c7c2ec4342.png" }
    ],
    messages: [
        { id: 1, message: "Wryy" },
        { id: 2, message: "menacing" },
        { id: 3, message: "Oraoraora" },
        { id: 4, message: "Konodioda" },
        { id: 5, message: "mudamudamuda" }
    ],
    newMessageText: ""
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = ("");
            return state;
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (body) =>
    ({ type: ADD_NEW_MESSAGE_TEXT, body: body })

export default dialogsReduser;