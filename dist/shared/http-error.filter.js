"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let HttpErrorFilter = class HttpErrorFilter {
    catch(exception, host) {
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
};
HttpErrorFilter = __decorate([
    common_1.Catch()
], HttpErrorFilter);
exports.HttpErrorFilter = HttpErrorFilter;
//# sourceMappingURL=http-error.filter.js.map