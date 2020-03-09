import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, message: "heh", likesCount: 125 },
                { id: 2, message: "nice face", likesCount: 25 },
                { id: 3, message: "Dora", likesCount: 27 },
                { id: 4, message: "Kono dio da", likesCount: 404 }
            ],
            newPostText: "nu ti"
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dio", img: "https://vignette.wikia.nocookie.net/unanything/images/9/9a/638771CC-8977-4AA9-96BE-741D96CDF3E1.jpeg/revision/latest/scale-to-width-down/340?cb=20190825143621" },
                { id: 2, name: "Jojo", img: "https://diskomir.ru/upload/iblock/79a/79a7e4ef1582a9f30df77bd8771266c8.jpg" },
                { id: 3, name: "Kars", img: "https://vignette.wikia.nocookie.net/jjba/images/e/e1/Kars_lol.png/revision/latest/top-crop/width/300/height/300?cb=20160521002833" },
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export default store;
window.store = store;