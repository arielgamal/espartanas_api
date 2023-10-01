import { Injectable } from '@nestjs/common';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';

@Injectable()
export class ExerciciosService {
  create(createExercicioDto: CreateExercicioDto) {
    return 'This action adds a new exercicio';
  }

  findAll() {
    return `This action returns all exercicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercicio`;
  }

  update(id: number, updateExercicioDto: UpdateExercicioDto) {
    return `This action updates a #${id} exercicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercicio`;
  }
}
