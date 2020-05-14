export class User {
    constructor(
        private id: string,
        private email: string, 
        private password: string, 
        private name: string, 
        private dateOfBirth: Date
        ) {}

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    getName() {
        return this.name
    }

    getDateOfBirth() {
        return this.dateOfBirth
    }
}