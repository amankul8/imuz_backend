
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

}

module.exports = new MusicsController();