import profileReduser, {addPostActionCreator} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

test('new post should be added', () => {
    let action = addPostActionCreator("heyhey")
    let state = {
        posts: [
            { id: 1, message: "heh", likesCount: 125 },
            { id: 2, message: "nice face", likesCount: 25 },
            { id: 3, message: "Dora", likesCount: 27 },
            { id: 4, message: "Kono dio da", likesCount: 404 }
        ]
    };
    let newState = profileReduser(state,action);

    expect(newState.posts.length).toBe(5);
});


