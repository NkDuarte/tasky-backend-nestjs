import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TwilioService } from 'src/twilio/twilio.service';
import { SmtpSmsDto } from './dto/smtp.dto';

@Controller('smtp')
export class SmtpController {

    constructor(
        private readonly twilio_service: TwilioService
    ) {

    }

    @Post('/send-sms')
    @UsePipes(new ValidationPipe())
    async sendSms(@Body() data: SmtpSmsDto) {
        return await this.twilio_service.sendSms(data.phone, data.message)
    }
}
