import { Model } from 'sequelize-typescript';
interface RoleCreationAttrs {
    value: string;
    description: string;
}
export declare class UserRoles extends Model<UserRoles, RoleCreationAttrs> {
    id: number;
    roleId: number;
    userId: number;
}
export {};
