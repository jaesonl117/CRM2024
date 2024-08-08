const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const companies = sequelize.define(
    'companies',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      address: {
        type: DataTypes.TEXT,
      },

      phone: {
        type: DataTypes.TEXT,
      },

      email: {
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

  companies.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.companies.hasMany(db.contacts, {
      as: 'contacts_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.companies.hasMany(db.documents, {
      as: 'documents_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.companies.hasMany(db.leads, {
      as: 'leads_company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    //end loop

    db.companies.belongsTo(db.company, {
      as: 'company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.companies.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.companies.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return companies;
};
