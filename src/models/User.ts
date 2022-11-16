import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

interface UserInstance extends Model {
    name: string;
    lastName: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: 'usuario',
    timestamps: false
})

// class User {
//     name: string;
//     lastName: string;
//     age: number;
//     showWelcome: boolean;

//     constructor(name: string, lastName: string, age: number){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//         this.showWelcome = false || true;
//     }
// }

// export default User