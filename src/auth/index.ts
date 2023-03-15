function discordAuth() {
    return function (req, res, next) {
        if (req.isAuthenticated()) return next();
        res.sendStatus(401);
    }
}

function apiKeyAuth() {
    return function (req, res, next) {
        if (req.headers.authorization == `x-api-key ${process.env.API_KEY}`) return next();
        res.sendStatus(401);
    }
}

function multiAuth() {
    return function (req, res, next) {
        if (req.isAuthenticated()) return next();
        if (req.headers.authorization == `x-api-key ${process.env.API_KEY}`) return next();
        res.sendStatus(401);
    }
}

export { discordAuth, apiKeyAuth, multiAuth };