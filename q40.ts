const make_album = (artistName: string, albumTitle: string, tracks?: number): { artistName: string; albumTitle: string; tracks?: number } => {

    return {
        artistName: artistName,
        albumTitle: albumTitle,
        tracks: tracks,
    }

};

console.log(make_album("Mishary bin Rashid Alafasy", "Elahi"));
console.log(make_album("Mishary bin Rashid Alafasy", "Rahman ya Rahman", 2));
console.log(make_album("Mishary bin Rashid Alafasy", "Mustafa Mustafa"));

