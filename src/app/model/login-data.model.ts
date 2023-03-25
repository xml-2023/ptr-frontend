export class LoginData {
    email: string = '';
    password: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.email = obj.email;
            this.password = obj.password;
        }
    }
}
