class User {
    name: string;
    lastName: string;
    age: number;
    showWelcome: boolean;

    constructor(name: string, lastName: string, age: number){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.showWelcome = false || true;
    }
}

export default User