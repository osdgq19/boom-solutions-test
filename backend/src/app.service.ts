import { Injectable } from '@nestjs/common';
const data = require('../articles.json') 

@Injectable()
export class AppService {
  getHello(): string {
    return data;
  }
}
