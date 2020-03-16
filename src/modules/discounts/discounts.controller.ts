import { Controller, Get, Param } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { Discount } from './dto/apiResponses';

@Controller('discounts')
export class DiscountsController {
  constructor(private discountsService: DiscountsService) {}

  @ApiOkResponse({type: [Discount]})
  @Get('')
  getDiscounts(){
    return this.discountsService.getDiscounts();
  }

  @ApiOkResponse({type: Discount})
  @Get(':id')
  getDiscount(@Param() params) {
    this.discountsService.getDiscountById(params.id)
  }

}
