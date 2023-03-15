function discordAuth() {
    return function (req, res, next) {
        if (req.isAuthenticated()) { return next() }
        res.sendStatus(401);
    }
}

export default discordAuth