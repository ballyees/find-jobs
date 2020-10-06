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

    getToString(){
        return `${this.#username} :: ${this.#type} :: ${this.#token}`
    }

    setUserLogin = (data) => {
        console.log(data)
        this.#username = data[ConfigureTokenizer.keyResponseData][0].username
        this.#token = data[ConfigureTokenizer.keyTokenResponse]
        this.#type = data[ConfigureTokenizer.keyResponseData][0].type
        console.log(this.#username, this.#type, this.#token)
    }

    async setRefershtoken(response){
        if (response.hasOwnProperty(ConfigureTokenizer.keyTokenResponse)) {
            this.#token = response[ConfigureTokenizer.keyTokenResponse]
        }else{
            console.log(`don't have token`)
        }
    }

    async Login(username, password){
        let data = {"username": username, "password": password}
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                // "Content-Type": 'application/x-www-form-urlencoded',
                "Content-Length": Buffer.byteLength(data)
            },
            mode: 'cors',
            body: JSON.stringify(data)
        }
        
        let response = await fetch(ConfigureTokenizer.proxyAnywhereAndUrlUserLogin, options).then(response => response)
        if (response.ok){
            response.json().then(data => {
                this.setUserLogin(data)
            })
            
        }
        return response.ok
        
    }
}