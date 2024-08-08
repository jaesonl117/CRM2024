const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const leads = sequelize.define(
    'leads',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      email: {
        type: DataTypes.TEXT,
      },

      phone: {
        type: DataTypes.TEXT,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['New', 'Contacted', 'Qualified', 'Converted'],
      },

      source: {
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

  leads.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.leads.hasMany(db.contacts, {
      as: 'contacts_lead',
      foreignKey: {
        name: 'leadId',
      },
      constraints: false,
    });

    db.leads.hasMany(db.documents, {
      as: 'documents_lead',
      foreignKey: {
        name: 'leadId',
      },
      constraints: false,
    });

    db.leads.hasMany(db.emails, {
      as: 'emails_lead',
      foreignKey: {
        name: 'leadId',
      },
      constraints: false,
    });

    db.leads.hasMany(db.tasks, {
      as: 'tasks_lead',
      foreignKey: {
        name: 'leadId',
      },
      constraints: false,
    });

    //end loop

    db.leads.belongsTo(db.users, {
      as: 'assigned_user',
      foreignKey: {
        name: 'assigned_userId',
      },
      constraints: false,
    });

    db.leads.belongsTo(db.companies, {
      as: 'company',
      foreignKey: {
        name: 'companyId',
      },
      constraints: false,
    });

    db.leads.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.leads.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return leads;
};
