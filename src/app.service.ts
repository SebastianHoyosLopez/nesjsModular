import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // console.log(this.tasks)
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    const port = this.configService.database.port;
    return `Hello World! ${apiKey} ${name} ${port}`;
  }
}
