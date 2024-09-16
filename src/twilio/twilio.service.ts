import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio'

@Injectable()
export class TwilioService {

    private twilioClient: twilio.Twilio

    constructor() {
        this.twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)
    }

    async sendSms(to: string, body: string): Promise<any> {
        try {
            const message = await this.twilioClient.messages.create({
                body: body,
                from: process.env.TWILIO_NUMBER,
                to: "+18777804236",
            });
            return message;
        } catch (error) {
            throw new Error(`Error enviando SMS: ${error.message}`);
        }
    }
}
