/**************************/
//! Imports
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'
/**************************/
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @MinLength(5)
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}