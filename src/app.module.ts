import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TwilioService } from './twilio/twilio.service';
import { ConfigModule } from '@nestjs/config';
import { SmtpModule } from './smtp/smtp.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    SmtpModule,
  ],
  controllers: [AppController],
  providers: [TwilioService],
})
export class AppModule {}
