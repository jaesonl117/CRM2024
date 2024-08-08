const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const company = sequelize.define(
    'company',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  company.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.company.hasMany(db.users, {
      as: 'users_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.company.hasMany(db.companies, {
      as: 'companies_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.company.hasMany(db.emails, {
      as: 'emails_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.company.hasMany(db.notifications, {
      as: 'notifications_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.company.hasMany(db.reports, {
      as: 'reports_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.company.hasMany(db.tasks, {
      as: 'tasks_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    //end loop

    db.company.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.company.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return company;
};
