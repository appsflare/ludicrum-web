/**
 * Created by srinath on 16/8/15.
 */
export default function (app) {

    return {
        url: '/',
        configure: function (router) {
            /* GET home page. */
            router.get('/watch/:mediaId', function (req, res, next) {
                var title = `Watching ${req.mediaId}`;
                res.render('watch', {title: title});
            });
            return router;
        }
    };
};
