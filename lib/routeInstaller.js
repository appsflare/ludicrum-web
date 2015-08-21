/**
 * Created by srinath on 16/8/15.
 */
import express from 'express';
import _ from 'lodash';

export default
class RouteInstaller {
    constructor(app) {
        this.app = app;
    }

    _getRouteUrl(parentName, name, route) {
        var routeUrl = route.url || ('/' + name);

        if (_.isFunction(routeUrl)) {
            routeUrl = routeUrl(parentName, name);
        }

        return routeUrl;
    }

    installRoutes(parent, routes) {
        for (var name in routes) {
            let routeGetter = routes[name];


            if (_.isFunction(routeGetter)) {

                var route = routeGetter(this.app);
                var routeUrl = this._getRouteUrl(parent, name, route);


                var router = route.configure(express.Router());

                if (_.isFunction(route.useRouter)) {
                    route.useRouter(app, url, router);
                }
                else {
                    if (routeUrl.indexOf('/') != 0) {
                        routeUrl = '/' + routeUrl;
                    }
                    console.log('installing route:', routeUrl);
                    this.app.use(routeUrl, router);
                }
            } else {

                this.installRoutes(name, routeGetter);
            }

        }
    }


    install(routes) {


        this.installRoutes('', routes);

    }
}