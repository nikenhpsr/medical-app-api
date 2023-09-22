import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Appointment } from './entities/appointment.entity';

@Controller('appointments')
@ApiTags('appointments')
export class AppointmentsController {
  constructor(private readonly AppointmentsService: AppointmentsService) { }

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: Appointment })
  create(@Body() CreateAppointmentDto: CreateAppointmentDto) {
    return this.AppointmentsService.create(CreateAppointmentDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: Appointment, isArray: true })
  findAll() {
    return this.AppointmentsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: Appointment })
  findOne(@Param('id') id: string) {
    return this.AppointmentsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: Appointment })
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.AppointmentsService.update(id, updateAppointmentDto);
  }
}