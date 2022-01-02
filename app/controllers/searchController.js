
class SearchController {

    async getGeneralSearchResult(request, response){
        response.status(200).json({text: request.query.text});
    }
}

module.exports = new SearchController();