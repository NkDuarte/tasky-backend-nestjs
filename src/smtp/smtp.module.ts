import { Module } from '@nestjs/common';
import { SmtpController } from './smtp.controller';
import { TwilioService } from 'src/twilio/twilio.service';

@Module({
  controllers: [SmtpController],
  providers: [TwilioService],
})
export class SmtpModule {}
