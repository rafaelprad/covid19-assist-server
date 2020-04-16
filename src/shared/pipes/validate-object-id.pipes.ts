import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
    async transform(value: string, metadata: ArgumentMetadata) {
        const isValid = new Types.ObjectId(value);
        if (!isValid) throw new BadRequestException('Invalid !');
        return value;
    }
}