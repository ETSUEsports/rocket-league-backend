function discordAuth() {
    return function (req, res, next) {
        console.log(req.cookies);
        if (req.isAuthenticated()) { return next() }
        res.sendStatus(401);
    }
}

export default discordAuth