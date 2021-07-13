import { Injectable } from "@nestjs/common";
import { users } from "src/db";
import { CreateUserDto, FindUserDetailsDto, UpdateUserDetailsDto, UserResponseDto } from "./dto/user.dto";

@Injectable()
export class UserService{

    private users = users;

    getAllUsers(): FindUserDetailsDto[]{
        return this.users
    }

    getUserById(userId: number): FindUserDetailsDto{
        return this.users.find(user =>{
            return user.id == userId
        })
    }

    createUser(payload: CreateUserDto): FindUserDetailsDto{
        let newUser = {
            ...payload
        }

        this.users.push(newUser);

        return newUser
    }

    updateUser(userId: number, payload: UpdateUserDetailsDto): UserResponseDto{
        let updatedUser: UserResponseDto

        let updatedUserList = this.users.map(user =>{
            if(user.id == userId){
                updatedUser = {
                    id: userId,
                    ...payload
                };
                return updatedUser
            }else{
                return user
            }
        });

        this.users = updatedUserList

        return updatedUser
    }

    deleteUser(userId: number): FindUserDetailsDto{
        
        let deletedUser: FindUserDetailsDto

        let updatedUserList = this.users.map((user, pos) => {
            if(user.id == userId){
                deletedUser = user
                pos = this.users.indexOf(user)
                this.users.splice(pos, 1)
                return deletedUser
            }else{
                return user
            }
        })

        this.users = updatedUserList
        
        return deletedUser
        
    }
}