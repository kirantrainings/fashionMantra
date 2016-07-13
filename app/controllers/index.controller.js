var homePage = function (req, res) {
    res.render("index", {
        title: "FashionMantra"
    });
};
exports.render = homePage;
