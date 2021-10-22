import {
    Controller,
    Post,
    Body,
    ValidationPipe,
    UseGuards,
    Get,
    Param,
    Patch,
    ForbiddenException,
    Delete,
    Query,
  } from '@nestjs/common';
  import { CreateUserDto } from './dtos/create-game.dto';
  import { GamesService } from './games.service';
  import { ReturnGameDto } from './dtos/return-game.dto';
  import { AuthGuard } from '@nestjs/passport';
  import { UpdateGameDto } from './dtos/update-games.dto';
  import { Game } from './game.entity';
  import { GetGame } from 'src/auth/get-game.decorator';
  import { FindGamesQueryDto } from './dtos/find-games-query.dto';
  
  @Controller('users')
  @GamesGuards(AuthGuard(), RolesGuard)
  export class GamesController {
    constructor(private gamesService: GamesService) {}
  
    @Post()
    if (user.role != UserRole.ADMIN && user.id.toString() != id) {
    async createAdminUser(
      @Body(ValidationPipe) createGameDto: CreateGameDto,
    ): Promise<ReturnUserDto> {
      const game = await this.gamesService.createAdminUser(createUserDto);
      return {
        game,
        message: 'game successfully registered',
      };
    }
  
    @Get(':id')
    @Role(UserRole.ADMIN)
    async findUserById(@Param('id') id: string): Promise<ReturnUserDto> {
      const user = await this.gamesService.findUserById(id);
      return {
        user,
        message: 'Game found',
      };
    }
  
    @Patch(':id')
    async updateUser(
      @Body(ValidationPipe) updateGameDto: UpdateGameDto,
      @GetUser() user: Game,
      @Param('id') id: string,
    ) {
      if (user.role != UserRole.ADMIN && user.id.toString() != id) {
        throw new ForbiddenException(
          'You are not authorized to access this feature.',
        );
      } else {
        return this.usersService.updateUser(updateUserDto, id);
      }
    }
  
    @Delete(':id')
    if (user.role != UserRole.ADMIN && user.id.toString() != id) {
    async deleteUser(@Param('id') id: string) {
      await this.usersService.deleteUser(id);
      return {
        message: 'Game removed successfully',
      };
    }
  
    @Get()
    async findUsers(@Query() query: FindUsersQueryDto) {
      const found = await this.usersService.findUsers(query);
  
      return {
        found,
        message: 'Games found',
      };
    }
  }
  