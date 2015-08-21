/**
 * Created by srinath on 16/8/15.
 */
export default function (app) {
    return {
        url: function (parent, name) {
            return '/:username/media';
        },
        configure: function (router) {
            /* GET home page. */
            router.post('/upload', function (req, res, next) {
                res.render('index', {title: 'Express'});
            });
            return router;
        }
    };
};