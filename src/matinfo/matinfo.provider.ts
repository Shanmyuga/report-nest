import { Connection } from 'mongoose';
import { MatinfoSchema } from './schemas/matinfo.schemas';

export const matInfoProviders = [
  {
    provide: 'MATERIAL_MODEL',
    useFactory: (connection: Connection) => connection.model('MaterialInfo', MatinfoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
