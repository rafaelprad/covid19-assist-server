import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as validateUU from 'uuid-validate';

@Injectable()
export class ValidateUuidId implements PipeTransform<string> {
    async transform(value: string, metadata: ArgumentMetadata) {
        const isValid = validateUU(value, 4);
        if (!isValid) throw new BadRequestException('Invalid !');
        return value;
    }
}