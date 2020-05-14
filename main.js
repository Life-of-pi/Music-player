var songLibrary = {
    "Finesse": ["Finesse", "bruno"],
    "My Feelings": ["In-My-Feelings", "drake"],
    "Girls Like You": ["Girls-Like-You", "maroon"],
    "New Rules": ["New-Rules", "dua"],
    "Perfect": ["Perfect", "Ed"]
};
document.getElementById("Playlist").innerHTML = "";
var song = /** @class */ (function () {
    function song() {
    }
    // url:string;
    song.prototype.isAddedAlready = function () {
    };
    song.prototype.appendSong = function (parameter) {
        // let songDiv = `<div class="p-2 bd-highlight song">${parameter.songName}</div>
        // <audio controls 
        // src="${songLibrary[parameter.songName]}.mp3"></audio>`;
        var songDiv = "<div class=\"card m-3\" style=\"width: 25rem;\">\n            <img src=\"" + songLibrary[parameter.songName][1] + ".jpg\" class=\"card-img-top\" alt=\"img\" width=\"200px\" height=\"250px\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + parameter.songName + "</h5>\n              <audio class=\"mb-2\" controls src=\"" + songLibrary[parameter.songName][0] + ".mp3\"></audio>\n              <p class=\"card-text\">Album:" + parameter.album + " <br>Artist:" + parameter.singerName + "</p>\n              <a href=\"#\" class=\"btn btn-primary\">Link</a>\n            </div>\n          </div>";
        document.getElementById("Playlist").innerHTML += songDiv;
    };
    return song;
}());
var musicplayer = /** @class */ (function () {
    function musicplayer(songInfo) {
        this.playlist = [];
        this.playlist.push(songInfo);
        console.log(this.playlist);
    }
    return musicplayer;
}());
// on form submit
var songInfo;
var newMusicPlayer;
var addSong = function () {
    console.log('Click addSong');
    songInfo = new song();
    songInfo.songName = document.getElementById("exampleFormControlSelect1").value;
    songInfo.singerName = document.getElementById("exampleFormControlSelect2").value;
    songInfo.album = document.getElementById("exampleFormControlSelect3").value;
    // songInfo.url = (<HTMLInputElement>document.getElementById("songUrl")).value;
    songInfo.appendSong(songInfo);
    return false;
};
newMusicPlayer = new musicplayer(songInfo);
// event listner to submt button
var form = document.getElementById('form');
form.addEventListener('submit', addSong);
// function logSubmit(event:any) {
//     console.log("clicked submit")
//     addSong();
//     event.preventDefault();
//   }
