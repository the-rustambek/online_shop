module.exports = class homeRouteCountroller{
    static async homeGetController(req,res){
        res.render("index");
    }
}