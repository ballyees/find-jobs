export default class ConfigureTokenizer {
    static keyTokenResponse = 'token'
    static keyResponseData = 'responseData'
    static urlUserLogin = 'http://127.0.0.1:8000/v1/api/user/login'
    static proxyHost = 'http://127.0.0.1:8000/'
    static proxyAnywhereLocal = 'http://127.0.0.1:8080/'
    static proxyAnywhere = 'http://cors-anywhere.herokuapp.com/'
    static proxyAnywhereAndUrlUserLogin = proxyAnywhereLocal + urlUserLogin
}