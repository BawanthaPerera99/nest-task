export class FindUserDetailsDto{
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
}

export class CreateUserDto{
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
}

export class UpdateUserDetailsDto{
    firstName: string;
    lastName: string;
    isActive: boolean;
}

export class UserResponseDto{
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
}