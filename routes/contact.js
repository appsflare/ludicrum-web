export default function (app) {

    return {

        configure: function (router) {
            /* GET home page. */
            router.get('/contact', function (req, res, next) {
                res.render('index', {title: 'Express'});
            });
            return router;
        }
    };
};