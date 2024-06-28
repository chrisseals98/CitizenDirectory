import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

export class Citizen extends Model {
    declare id: number;
    declare ssn: string;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare birth_date: Date;
    declare gender: string;
    declare race: string;
    declare language: string;
    declare job_title: string;
    declare phone_number: string;
    declare street_address: string;
    declare city: string;
    declare state: string;
    declare favorite_color: string;
    declare credit_card_number: string;
    declare credit_card_type: string;
    declare bank_balance: string;
    declare social_score: string;
}

Citizen.init(
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ssn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      job_title: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      street_address: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      favorite_color: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      credit_card_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      credit_card_type: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      bank_balance: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      social_score: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    },
    {
        sequelize,
        tableName: "CITIZENS",
        timestamps: false
    },
);
