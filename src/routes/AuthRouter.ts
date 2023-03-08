import { Router } from 'express';
import passport from 'passport';
export const AuthRoutes = Router();

AuthRoutes.get('/auth/strategies', function(req, res) {
    res.send({ "strategies": Object.keys(passport._strategies) })
});

AuthRoutes.get('/auth/discord', passport.authenticate('discord'));
AuthRoutes.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/auth/discord/success');
});
AuthRoutes.get('/auth/discord/success', function(req, res) {
    res.send({ "status": "success", "user": req.user})
});