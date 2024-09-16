/**************************/
//! Imports
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'
/**************************/
export class SmtpSmsDto {

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}