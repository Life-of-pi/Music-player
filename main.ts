const songLibrary = {
    "Finesse": ["Finesse","bruno"],
    "My Feelings": ["In-My-Feelings","drake"],
    "Girls Like You": ["Girls-Like-You","maroon"],
    "New Rules": ["New-Rules","dua"],
    "Perfect": ["Perfect","Ed"]
};

document.getElementById("Playlist").innerHTML = "";
class song {
    songName: string;
    singerName: string;
    album: string;
    // url:string;

    isAddedAlready(){

    }

    appendSong(parameter: song) {
            // let songDiv = `<div class="p-2 bd-highlight song">${parameter.songName}</div>
            // <audio controls 
            // src="${songLibrary[parameter.songName]}.mp3"></audio>`;
            let songDiv = `<div class="card m-3" style="width: 25rem;">
            <img src="${songLibrary[parameter.songName][1]}.jpg" class="card-img-top" alt="img" width="200px" height="250px">
            <div class="card-body">
              <h5 class="card-title">${parameter.songName}</h5>
              <audio class="mb-2" controls src="${songLibrary[parameter.songName][0]}.mp3"></audio>
              <p class="card-text">Album:${parameter.album} <br>Artist:${parameter.singerName}</p>
              <a href="#" class="btn btn-primary">Link</a>
            </div>
          </div>`;
            document.getElementById("Playlist").innerHTML += songDiv;
        }
}

class musicplayer {
    playlist: song[] = [];

    constructor(songInfo: song) {
        this.playlist.push(songInfo);
        console.log(this.playlist);
    }

}

// on form submit
let songInfo: song;
let newMusicPlayer: musicplayer;


let addSong = () => {
    console.log('Click addSong');
    songInfo = new song();
    songInfo.songName = (<HTMLInputElement>document.getElementById("exampleFormControlSelect1")).value;
    songInfo.singerName = (<HTMLInputElement>document.getElementById("exampleFormControlSelect2")).value;
    songInfo.album = (<HTMLInputElement>document.getElementById("exampleFormControlSelect3")).value;
    // songInfo.url = (<HTMLInputElement>document.getElementById("songUrl")).value;
    songInfo.appendSong(songInfo);
    return false;
}

newMusicPlayer = new musicplayer(songInfo);

// event listner to submt button
const form = document.getElementById('form');
form.addEventListener('submit', addSong);

// function logSubmit(event:any) {
//     console.log("clicked submit")
//     addSong();
//     event.preventDefault();
//   }

