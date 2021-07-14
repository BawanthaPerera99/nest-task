import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { UserEntity } from "src/database/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, FindUserDetailsDto } from "./dto/user.dto";
import { User } from "./model/user.interface";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ){}

    getAllUsers(): Observable<User[]>{
        return from(this.userRepository.find());
    }

    getUserById(id: number): Observable<User>{
        return from(this.userRepository.findOne(id));
    }

    createUser(user: User): Observable<User>{
        return from(this.userRepository.save(user));
    }

    updateUser(id: number, user: User): Observable<any>{
        return from(this.userRepository.update(id, user));
    }

    deleteUser(id: number): Observable<any>{
        return from(this.userRepository.delete(id));
    }
}