import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const rest = ctx.getResponse();
    const status = exception.getStatus();

    const errorRespose = {
      code: status,
      path: req.url,
      method: req.method,
      message: exception.message.error || exception.message || null,
    };

    rest.status(status).json(errorRespose);
  }
}
