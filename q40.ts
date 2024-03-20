// Album

// interface for album object
interface Album {
  artistName: string;
  albumTitle: string;
  tracks?: number;
}

// function that builds an object describing a music album
function make_album(
  artistName: string,
  albumTitle: string,
  tracks?: number
): Album {
  let album: Album = {
    artistName: artistName,
    albumTitle: albumTitle,
  };
  if (tracks != undefined) {
    album.tracks = tracks;
  }
  return album;
}

console.log(make_album("Mishary bin Rashid Alafasy", "Elahi"));
console.log(make_album("Mishary bin Rashid Alafasy", "Rahman ya Rahman", 3));
console.log(make_album("Mishary bin Rashid Alafasy", "Mustafa Mustafa"));
