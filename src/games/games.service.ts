import {
    Injectable,
    NotFoundException
  } from '@nestjs/common';
  import { CreateGamsDto } from './dto/create-games.dto';
  import { UpdateGameDto} from './dto/update-games.dto';
  import { Repository } from 'typeorm'
  import { InjectRepository } from '@nestjs/typeorm';
  import { Games } from './game.entity';
  import { User } from 'src/users/user.entity';
  

  @Injectable()
  export class GamesService {
    [x: string]: any;
    constructor(
    @InjectRepository(UpdateGameDto)
    private readonly GameRepository: Repository<Games>) {}
  
    async findMany() {
      return await this.gameRepository.find()
   
    }
  
    async findOneGame(id: number) {
      const game = await this.gameRepository
        .findOne(id)
      if (!game)
        throw new NotFoundException('game does not exist or unauthorized');
      return game;
  
    }

    async postGame(createGamesDto: CreateGamesDto) {
      const game = this.gameRepository.create({ ...creategamesDto });
      return await this.gameRepository.save(game);
    }
    
    async update(id: number, updateGameDto: UpdateGameDto) {
      const game = await this.getById(id);
      const gameedit = Object.assign(game, updateGameDto);
      return await this.gameRepository.save(gameedit);
    }
  
    async delete(id: number, user?: User) {
      const game = await this.getById(id, user);
      return await this.gameRepository.remove(game);
    }
  
  }