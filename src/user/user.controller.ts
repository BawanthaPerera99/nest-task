import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateUserDto, FindUserDetailsDto, UpdateUserDetailsDto, UserResponseDto } from "./dto/user.dto";
import { User } from "./model/user.interface";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{

    constructor(private readonly userService: UserService){}
    
    @Get()
    getAllUsers(): Observable<User[]>{
        return this.userService.getAllUsers();
    }

    @Get('/:id')
    getUserById(
        @Param('id') userId:number
    ): Observable<User>{
        return this.userService.getUserById(userId);
    }

    @Post()
    createUSer(
        @Body() body: User
    ): Observable<User>{
        return this.userService.createUser(body);
    }

    @Put('/:id')
    updateUser(
        @Param('id') userId:number,
        @Body() body: User
    ): Observable<any>{
        return this.userService.updateUser(userId, body);
    }

    @Delete('/:id')
    deleteUser(
        @Param('id') userId:number
    ): Observable<any>{
        return this.userService.deleteUser(userId);
    }
}