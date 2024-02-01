// Album
// Arrow function that builds an object describing a music album
const make_album = (artistName, albumTitle, tracks) => {
    let album = {
        artistName: artistName,
        albumTitle: albumTitle,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
};
console.log(make_album("Mishary bin Rashid Alafasy", "Elahi"));
console.log(make_album("Mishary bin Rashid Alafasy", "Rahman ya Rahman", 3));
console.log(make_album("Mishary bin Rashid Alafasy", "Mustafa Mustafa"));
export {};
