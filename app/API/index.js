import _ from 'lodash';
// import { useNetInfo } from "@react-native-community/netinfo";

// const netInfo = useNetInfo();

// const API = (props) => {
class API {
    HOST = 'http://masstor.mrcto.org/api';// Add Base URL here for dev

    async NetWorkFailedError(err, reject) {
        if (err.message === 'JSON Parse error: Unexpected EOF') {
            err.message = 'Please try later';
        }
        if (err == "SyntaxError: JSON Parse error: Unrecognized token '<'") {
            alert('Sorry, things are taking a bit longer than expected. Please check back.');
        } else {
            if (err.message === 'Network request failed') {
                err.message = 'Please check your internet';
            }
            if (typeof reject !== "undefined") {
                reject(err);
            } else {
                alert(err.message);
            }
        }
    }

    //Post Function
    async POST(endpoint, params) {
        console.log("endpoint**111", endpoint, "params", params)
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': params.token
        };
        // if (token !== undefined) {
        //     headers['Authorization'] = `Bearer ${token}`;
        // }
        if (params.token !== undefined) {
            headers['Authorization'] = params.token;
        }

        try {
            return new Promise((resolve, reject) => {
                fetch(this.normalizePath(endpoint), {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(params)
                    //body: params
                })
                    .then((res) => {
                        // console.log(res);
                        return res.json().then((json) => {
                            if (res.status >= 200 && res.status < 300) {
                                resolve(json);
                            } else {
                                reject(json);
                            }
                        });
                    })
                    .catch(async (err) => {
                        this.NetWorkFailedError(err, reject);
                    });
            });
        } catch (err) {
            this.NetWorkFailedError(err, reject);
        }
    }

    //Get Function
    async GET(endpoint, params) {
        var headers = {};
        // if (!netInfo.isConnected) {
        //     return false;
        // }
        // h
        headers = {
            "Authorization": params.token
        }

        var esc = encodeURIComponent;
        // console.log("endpoint**111", endpoint, "params", params)
        var query = ""
        if (!_.isEmpty(params)) {
            query = Object.keys(params)
                .map(k => esc(k) + '=' + esc(params[k]))
                .join('&');
        }

        return new Promise(async (resolve, reject) => {
            var uri = "";
            if (query != "") {
                uri = this.normalizePath(`${endpoint}?${query}`);
            }
            else {
                uri = this.normalizePath(`${endpoint}`);
            }
            // console.log(uri);
            try {
                var res = await fetch(uri, {
                    method: 'GET',
                    headers: headers
                });

                res.json().then(json => {
                    console.log("Get api response : " + JSON.stringify(json))
                    if (res.status >= 200 && res.status < 300) {
                        resolve(json);
                    } else {
                        reject(json);
                    }
                }).catch(async (err) => {
                    console.log("Log from the index. api 1")
                    this.NetWorkFailedError(err, reject);
                });
            } catch (err) {
                console.log("Log from the index. api 2")
                this.NetWorkFailedError(err, reject);
            }
        });

    }

    //Delete Function
    async DELETE(endpoint, params) {
        console.log("endpoint**111", endpoint, "params", params)
        var headers = {
            'Content-Type': 'application/json',
            // 'Authorization': params.token
        };
        // if (token !== undefined) {
        //     headers['Authorization'] = `Bearer ${token}`;
        // }
        if (params.token !== undefined) {
            headers['Authorization'] = params.token;
        }

        try {
            return new Promise((resolve, reject) => {
                fetch(this.normalizePath(endpoint), {
                    method: 'DELETE',
                    headers: headers,
                    body: JSON.stringify(params)
                    //body: params
                })
                    .then((res) => {
                        // console.log(res);
                        return res.json().then((json) => {
                            if (res.status >= 200 && res.status < 300) {
                                resolve(json);
                            } else {
                                reject(json);
                            }
                        });
                    })
                    .catch(async (err) => {
                        this.NetWorkFailedError(err, reject);
                    });
            });
        } catch (err) {
            this.NetWorkFailedError(err, reject);
        }
    }

    //Put Api Calling
    async PUT(endpoint, params) {
        console.log("endpoint**111", endpoint, "params", params)
        var headers = {
            'Content-Type': 'application/json',
            // 'Authorization': params.token
        };
        // if (token !== undefined) {
        //     headers['Authorization'] = `Bearer ${token}`;
        // }
        if (params.token !== undefined) {
            headers['Authorization'] = params.token;
        }

        try {
            return new Promise((resolve, reject) => {
                fetch(this.normalizePath(endpoint), {
                    method: 'PUT',
                    headers: headers,
                    body: JSON.stringify(params)
                    //body: params
                })
                    .then((res) => {
                        // console.log(res);
                        return res.json().then((json) => {
                            if (res.status >= 200 && res.status < 300) {
                                resolve(json);
                            } else {
                                reject(json);
                            }
                        });
                    })
                    .catch(async (err) => {
                        this.NetWorkFailedError(err, reject);
                    });
            });
        } catch (err) {
            this.NetWorkFailedError(err, reject);
        }
    }

    normalizePath(endpoint) {

        return `${this.HOST}${endpoint}`;
    }

};
export default new API;