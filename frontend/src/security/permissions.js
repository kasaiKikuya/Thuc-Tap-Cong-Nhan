import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [roles.librarian,roles.admin ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [roles.librarian,roles.admin],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [roles.librarian,roles.admin],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [roles.librarian,roles.admin  ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [roles.librarian,roles.admin, roles.member],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
      },
      loanEmail: {
        id: 'loanEmail',
        allowedRoles: [roles.librarian,roles.admin],
      },
      loanImport: {
        id: 'loanImport',
        allowedRoles: [roles.librarian,roles.admin],
      },
      loanCreate: {
        id: 'loanCreate',
        allowedRoles: [roles.librarian,roles.admin, roles.member],
        allowedStorageFolders: ['loan'],
      },
      loanEdit: {
        id: 'loanEdit',
        allowedRoles: [roles.librarian,roles.admin],
        allowedStorageFolders: ['loan'],
      },
      loanDestroy: {
        id: 'loanDestroy',
        allowedRoles: [roles.librarian,roles.admin],
        allowedStorageFolders: ['loan'],
      },
      loanRead: {
        id: 'loanRead',
        allowedRoles: [roles.librarian,roles.admin, roles.member],
      },
      loanAutocomplete: {
        id: 'loanAutocomplete',
        allowedRoles: [roles.librarian,roles.admin ],
      },

      bookImport: {
        id: 'bookImport',
        allowedRoles: [roles.librarian,roles.admin],
      },
      bookCreate: {
        id: 'bookCreate',
        allowedRoles: [roles.librarian,roles.admin],
        allowedStorageFolders: ['book'],
      },
      bookEdit: {
        id: 'bookEdit',
        allowedRoles: [roles.librarian,roles.admin],
        allowedStorageFolders: ['book'],
      },
      bookDestroy: {
        id: 'bookDestroy',
        allowedRoles: [roles.librarian,roles.admin],
        allowedStorageFolders: ['book'],
      },
      bookRead: {
        id: 'bookRead',
        allowedRoles: [roles.librarian,roles.admin, roles.member],
      },
      bookAutocomplete: {
        id: 'bookAutocomplete',
        allowedRoles: [roles.librarian,roles.admin ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
