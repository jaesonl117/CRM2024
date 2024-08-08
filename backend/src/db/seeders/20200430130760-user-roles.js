const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('SuperAdmin'),
        name: 'Super Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('SystemManager'),
        name: 'System Manager',
        createdAt,
        updatedAt,
      },

      {
        id: getId('CompanyDirector'),
        name: 'Company Director',
        createdAt,
        updatedAt,
      },

      {
        id: getId('OperationsLead'),
        name: 'Operations Lead',
        createdAt,
        updatedAt,
      },

      {
        id: getId('SalesSpecialist'),
        name: 'Sales Specialist',
        createdAt,
        updatedAt,
      },

      {
        id: getId('SupportAgent'),
        name: 'Support Agent',
        createdAt,
        updatedAt,
      },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'companies',
      'contacts',
      'documents',
      'emails',
      'leads',
      'notifications',
      'reports',
      'tasks',
      'roles',
      'permissions',
      'company',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.bulkUpdate(
      'roles',
      { globalAccess: true },
      { id: getId('SuperAdmin') },
    );

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('UPDATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('UPDATE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemManager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CompanyDirector'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsLead'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SalesSpecialist'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SupportAgent'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_COMPANIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_COMPANIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_COMPANIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_COMPANIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_COMPANIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_COMPANIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_COMPANIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_COMPANY'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_COMPANY'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_COMPANY'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_COMPANY'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SystemManager',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'CompanyDirector',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
