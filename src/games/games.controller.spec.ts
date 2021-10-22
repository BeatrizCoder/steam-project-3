import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/common/decorators/auth-user.decorator';
import { CreateGamesDto } from 'src/auth/games/dto/create-games.dto';
import { GamesService } from './games.service';
import { Games } from './game.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('games')
export class GamesController {
  constructor(private service: GamesService) {}

  @Get()
  @UsePipes(ValidationPipe)
  find() {
    return this.service.find();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@AuthUser()@Param('id') id: number): Promise<Games> {
    return this.service.findOneGame(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  post(@AuthUser()@Body() data: CreateGamesDto): Promise<JGames> {
    return this.service.postGame( data );
  }

  @Delete('delete/:id')
  @UsePipes(ValidationPipe)
  delete(@AuthUser()@Param('id') id: number): Promise<Games[]> {
    return this.service.delete(id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @AuthUser()
    @Body() updateGame: CreateGamesDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Games>{
    return this.service.update(id,updateGame);
  }
}