import { Module } from '@nestjs/common';
import { GamesController } from './games.controller;
import { GamesService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateGameDto} from './dto/update-games.dto';

@Module({
  imports: [TypeOrmModule.forFeature([UpdateGameDto])],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
