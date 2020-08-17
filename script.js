

var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
   let search = document.getElementById("search").value;
   let api = `https://api.lyrics.ovh/suggest/${search}`;
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            var name = document.getElementsByClassName("song-name");
            var albumBy = document.getElementsByClassName("albumBy");
            for (let i = 0; i < 11; i++) {
                var title = data.data[i].title;
                var author = data.data[i].artist.name;
                name[i].innerHTML = title;
                albumBy[i].innerHTML = author;
            }
        }
        )

})



var buttons = document.getElementsByClassName("lyric-btn");
for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener("click", function () {
        let search = document.getElementById("search").value;
        let api = `https://api.lyrics.ovh/suggest/${search}`;
        fetch(api)
            .then(response => response.json())
            .then((data) => {
                let title = data.data[i].title;
                let artist = data.data[i].artist.name;
                let api2 = `https://api.lyrics.ovh/v1/${artist}/${title}`
                fetch(api2)
                    .then(response => response.json())
                    .then((data) => {
                        document.getElementById("lyric-text").innerHTML = `<p>${data.lyrics}</p>`
                        document.getElementById("lyric-title").innerHTML = `<h2>${title}, ${artist}</h2>`
                    })
            }
    )})
}







