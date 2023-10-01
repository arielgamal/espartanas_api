import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './users/user.module';
import { UserEntity } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExerciciosModule } from './exercicios/exercicios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: "mysql",
        host: 'localhost',
        port: 3306,
        username: ConfigService.get("DB_USERNAME"),
        password: ConfigService.get("DB_PASSWORD"),
        database: 'espartanas',
        entities: [UserEntity],
        synchronize: true,
      })
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'ariel',
    //   password: '12345678',
    //   database: 'espartanas',
    //   entities: [UserEntity],
    //   synchronize: true,
    // }),
    UserModule,
    ExerciciosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
