import React from 'react';
import axios from 'axios';

export default class HttpRequest { 
    static defaultRoute = "http://192.168.15.3/WebPonto/backend/";

    static post(route, params) {
        params['route']=route;
        fetch(this.defaultRoute, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                params
            }),
        });

    }
}