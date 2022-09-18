import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name Item: ${createItemDto.name} -- Desc Item: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item with ID: '${id}' deleted!`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Item with ID: '${id}' updated! ${updateItemDto.name}`;
  }
}
