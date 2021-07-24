import axios from 'axios';
import { Notification } from 'element-ui';
import router from 'vue-router';
import { TOKEN_KEY, BASE_URL, NOT_AUTH_URLS } from '@/configs/http';
import { getUser } from '@/utils';

const requestFactory = (client) => {
    client.interceptors.request.use(
        (opts) => {
            if (NOT_AUTH_URLS.indexOf(opts.url) === -1) {
                const user = getUser();
                if (typeof opts.params === 'undefined' && user[TOKEN_KEY]) {
                    opts.params = {};
                    opts.params[TOKEN_KEY] = user[TOKEN_KEY];
                }
            }
            return opts;
        },
        (error) => Promise.reject(error)
    )
}

const responseFactory = (client) => {
    client.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            } else if (response.status === 401) {
                Notification.error('登录过期');
                router.push('/login');
                return Promise.reject('登录过期');
            } else if (response.status === 500) {
                Notification.error('服务器处理出错');
                return Promise.reject('服务器处理出错');
            } else {
                if (response.data.msg) {
                    Notification.error(response.data.msg);
                    return Promise.reject(response.data);
                } else {
                    return Promise.reject(response.data);
                }
            }
        },
        (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    Notification.error('登录过期');
                    router.push('/login');
                    return Promise.reject('登录过期');
                } else if (error.response.status === 500) {
                    Notification.error('服务器错误');
                    return Promise.reject('服务器错误');
                } else {
                    if (error.response.data && error.response.data.msg) {
                        Notification.error(error.response.data.msg);
                        return Promise.reject(error.response.data);
                    } else {
                        return Promise.reject(error);
                    }
                }
            } else {
                return Promise.reject(error);
            }
        }
    )
}

const factory = (options = {}) => {
    const client = axios.create(options);
    requestFactory(client);
    responseFactory(client);
    return client;
}

const request = factory({
    baseURL: BASE_URL,
    timeout: 1000 * 180, // 20sec
});

export default request;
