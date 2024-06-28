import { Sequelize } from 'sequelize';
import { APP_SETTINGS } from '../../env.local';


export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: APP_SETTINGS.DATABASE_PATH
});
