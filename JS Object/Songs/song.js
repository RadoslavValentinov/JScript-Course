function songs(input) {
    
    class Song{
        constructor(type,name,time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberSong = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < numberSong; i++) {
        let [type,name,time] = input[i].split('_');
        let create = new Song(type,name,time);
        songs.push(create);
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}


songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );