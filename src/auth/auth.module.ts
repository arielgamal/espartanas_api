import { Module } from '@nestjs/common';
import { AuthController } from './auth.cotroller';
import { AuthService } from './auth.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
