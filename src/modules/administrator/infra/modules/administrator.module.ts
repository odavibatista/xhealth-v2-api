import { Module } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';

@Module({
            imports: [],
        controllers: [],
        providers: [EncrypterProvider, HashProvider, JWTProvider],
        exports: [],
})
export class AdministratorModule {}
