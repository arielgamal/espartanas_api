import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthUserDTO {
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio' })
  @IsEmail(undefined, { message: 'É preciso ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Campo senha não pode ser vazio' })
  password: string;
}
