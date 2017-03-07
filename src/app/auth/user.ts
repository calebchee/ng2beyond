export class User {
    username: string;
    password: string;
    firstname: string;
    lastname: string;  
    admin: Boolean;
    location: string;

    fromJSON(json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}

