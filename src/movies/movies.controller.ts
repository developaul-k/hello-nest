import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies'
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `We are searching for a movie with a title: ${year}`
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`
  }

  @Post()
  create(@Body() data) {
    return data
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with the id ${id}`
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() data) {
    return {
      updatedMovie: id,
      ...data
    }
  }
}
