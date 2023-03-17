import { ApiProperty } from '@nestjs/swagger';
import {Model, Table, Column, DataType, BelongsToMany} from 'sequelize-typescript'
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
   email: string;
   password:string;
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example:"1", description:'ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @ApiProperty({example:"...@mail.com", description:'почта пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email:string;

    @ApiProperty({example:"qwerty123", description:'пароль пользователя'})
    @Column({type: DataType.STRING, allowNull:false})
    password: string;

    @ApiProperty({example:"true", description:'забанен ли пользователь'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned:boolean;

    @ApiProperty({example:"Спамил порнуху", description:'за что забанен пользователь'})
    @Column({type: DataType.STRING, allowNull:true})
    banReason:string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}