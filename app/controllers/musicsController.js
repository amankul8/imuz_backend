let musics_services = require("./../services/MusicsServices");

class MusicsController{
    async getHomeMusics(request, response){
        let tracks = {popular: [], new_tracks: [], for_you: []}
        response.status(200).json(tracks);
    }
    async getPlayListMusics(request, response){
        let tracks = {track: []}
        response.status(200).json(tracks);
    }
    async getAllMusics(request, response){
        let tracks = {popular: [], new_tracks: [], for_you: []}
        response.status(200).json(tracks);
    }

    async addMusic(request, response){
        //let status_code = 0;
        let result = '';
        result = await musics_services.addMusic();

        response.status(200).json(result);
    }

}

module.exports = new MusicsController();