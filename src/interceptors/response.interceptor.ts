import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ApiResponse<T = any> {
  constructor(
    public readonly message: string,
    public readonly error: string | undefined,
    public readonly data: T,
    public readonly status: string,
  ) {}
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        message: 'Success',
        error: undefined,
        data,
        status: 'success',
      })),
    );
  }
}
