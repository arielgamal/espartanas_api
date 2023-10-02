import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, Max, Min, MinLength } from "class-validator";

export class RegisterUserDTO {
  @IsNotEmpty({message: "Campo nome não pode ser vazio"})
  @IsString()
  @Length(1, 50)
  name: string;

  @IsNotEmpty({message: "Campo ultimo nome não pode ser vazio"})
  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsNotEmpty({message: "Campo email não pode ser vazio"})
  @IsEmail(undefined, {message: "É preciso ser um email válido"})
  email: string;
  
  @IsOptional()
  @Length(10, 20)
  phone: string;

  @IsNotEmpty({message: "Campo senha não pode ser vazio"})
  @IsString()
  @MinLength(6, { message: 'A sua senha precisar ter no mínimo 6 caracteres'})
  @Matches(/(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:;<=>?~])/)
  password: string;

  @IsNotEmpty({message: "É preciso aceitar os termos de serviço."})
  accept_terms_and_privacy_politics: boolean;
}