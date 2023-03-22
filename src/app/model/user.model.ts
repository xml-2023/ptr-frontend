export class User {
    id: number = 0;
    name: string = '';
    surname: string = '';
    email: string = '';
    password: string = '';
    
    public constructor(obj?: any) {
        if (obj) {
            this.name = obj.name;
            this.surname = obj.surname; 
            this.id = obj.id;
            this.email = obj.email;
            this.password = obj.password;         
        }
    }
}
