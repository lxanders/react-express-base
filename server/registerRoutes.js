import path from 'path';

export default (router) => {
    router.get('/bundle.js', function (req, res) {
        res.sendFile(path.resolve(__dirname, '..', 'bundle.js'));
    });

    router.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, '..', '..', 'app', 'index.html'));
    });

    return router;
};
