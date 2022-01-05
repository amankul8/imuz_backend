const Music = require("../models/MusicModel");

class MusicsServices{

    addMusic = async  ()=>{
        let result;
        try{
            result = await  Music.create({name: 'Tom tom', artist: 'Tome Cruz', genre: 'Roc', url: "url", text: 'no text', });
        }catch (err){
            result = err.message;
        }
        return result;
    }
}

module.exports = new MusicsServices();