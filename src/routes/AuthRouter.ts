import { Router } from 'express';
import passport from 'passport';
export const AuthRoutes = Router();

AuthRoutes.get('/auth/strategies', function (req, res) {
    res.send({ "strategies": [{ name: "discord", url: "/api/v1/auth/strategies/discord", callback: "/api/v1/auth/strategies/discord/callback", logout: "/api/v1/auth/strategies/discord/logout" }] })
});

AuthRoutes.get('/auth/me', function (req, res) { 
    if (req.isAuthenticated()) {
        res.send({ "status": "success", "user": req.user })
    } else {
        res.send({ "status": "error" })
    }
});

AuthRoutes.get('/auth/strategies/discord', passport.authenticate('discord'));
AuthRoutes.get('/auth/strategies/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/auth/strategies/discord/error'
}), function (req, res) {
    if(process.env.NODE_ENV === 'production') {
        res.redirect('https://etsuesports.ryois.net/rocket-league-backend/api/v1/auth/strategies/discord/success');
    } else {
        res.redirect('/api/v1/auth/strategies/discord/success');
    }
});
AuthRoutes.get('/auth/strategies/discord/success', function (req, res) {
    const popupScript = `
    <script>
      window.opener.postMessage({ "status": "success", "user": ${JSON.stringify(req.user)}}, '*');
      // window.close();
    </script>
  `;
    res.send(`<html><head><title>Success</title></head><body>${popupScript}</body></html>`);
});
AuthRoutes.get('/auth/strategies/discord/error', function (req, res) {
    res.send({ "status": "error" })
});
AuthRoutes.post('/auth/strategies/discord/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.send({ "status": "success" })
    });
});
