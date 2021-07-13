import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto, FindUserDetailsDto, UpdateUserDetailsDto, UserResponseDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{

    constructor(private readonly userService: UserService){}
    
    @Get()
    getAllUsers(): FindUserDetailsDto[]{
        return this.userService.getAllUsers()
    }

    @Get('/:id')
    getUserById(
        @Param('id') userId:number
    ): FindUserDetailsDto{
        return this.userService.getUserById(userId)
    }

    @Post()
    createUSer(
        @Body() body: CreateUserDto
    ): FindUserDetailsDto{
        return this.userService.createUser(body)
    }

    @Put('/:id')
    updateUser(
        @Param('id') userId:number,
        @Body() body: UpdateUserDetailsDto
    ): UserResponseDto{
        return this.userService.updateUser(userId, body)
    }

    @Delete('/:id')
    deleteUser(
        @Param('id') userId:number
    ): FindUserDetailsDto{
        return this.userService.deleteUser(userId)
    }
}