import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data';

// export interface Todo {
//   title: string;
// }

@Injectable()
export class AppService {
  getTodos(): Todo[] {
    return [{ title: 'Fix my computer!' }, { title: 'Fix my desk' }];
  }
}
