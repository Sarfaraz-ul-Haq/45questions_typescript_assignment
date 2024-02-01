"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_album = (artistName, albumTitle, tracks) => {
    return {
        artistName: artistName,
        albumTitle: albumTitle,
        tracks: tracks,
    };
};
console.log(make_album("Mishary bin Rashid Alafasy", "Elahi"));
console.log(make_album("Mishary bin Rashid Alafasy", "Rahman ya Rahman", 2));
console.log(make_album("Mishary bin Rashid Alafasy", "Mustafa Mustafa"));
