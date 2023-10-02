import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { RegisterUserDTO } from "./dto/register-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
    // private ConfigService: ConfigService
  ) {}

  findAll() {
  const todos = this.userRepository.find()
  return todos;
  }

  create(RegisterUserDTO: RegisterUserDTO) {
    const create = this.userRepository.save(RegisterUserDTO)
    return create;
  }
}