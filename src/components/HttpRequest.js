import React from 'react';

export default class HttpRequest { 
    static defaultRoute = "http://localhost/WebPonto/backend/";

    static post(route, params) {
        params['route']=route;
        return fetch(this.defaultRoute, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                params
            }),
        });

    }
}