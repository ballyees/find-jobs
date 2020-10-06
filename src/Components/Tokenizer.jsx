import ConfigureTokenizer from './ConfigureTokenizer';
export default class Tokenizer {
    #username;
    #token;
    #type;

    constructor(name){
        this.name = name
    }
    get token(){
        return this.#token
    }

    getTostring(){
        return `${this.#username} :: ${this.#type} :: ${this.#token}`
    }

    setUserLogin = (data) => {
        console.log(data)
        this.#username = data[ConfigureTokenizer.keyResponseData][0].username
        this.#token = data.token
        this.#type = data[ConfigureTokenizer.keyResponseData][0].type
        console.log(this.#username, this.#type, this.#token)
    }

    async setRefershtoken(response){
        if (response.hasOwnProperty(ConfigureTokenizer.keyTokenResponse)) {
            console.log('have a token')
        }else{
            console.log(`don't have token`)
        }
    }

    async Login(username, password){
        let data = {"username": username, "password": password}
        let response = await fetch(ConfigureTokenizer.proxyAnywhereAndUrlUserLogin, {
            method: 'POST',
            headers: {
                // "Access-Control-Allow-Origin": ConfigureTokenizer.proxyHost,
                // "Access-Control-Allow-Methods": "*",
                // "Access-Control-Allow-Headers": "*",
                // "Accept": "*/*",
                "Content-Type": 'application/json',
                "Content-Length": Buffer.byteLength(data)
            },
            mode: 'cors',
            body: JSON.stringify({"username": username, "password": password})
        }).then(response => response)
        if (response.ok){
            response.json().then(data => {
                this.setUserLogin(data)
            })
            
        }
        return response.ok
        
    }
}