import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { RegisterUserDTO } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll() {
    const todos = this.userRepository.find();
    return todos;
  }

  create(RegisterUserDTO: RegisterUserDTO) {
    try {
      const result = this.userRepository.save(RegisterUserDTO);

      const response = {
        message: 'User created successfully',
        data: result,
      };
      return response;
    } catch (e) {
      throw new BadRequestException('Não foi possivel criar um usuário');
    }
  }
}
