const db = require('../models');
const Users = db.users;

const Companies = db.companies;

const Contacts = db.contacts;

const Documents = db.documents;

const Emails = db.emails;

const Leads = db.leads;

const Notifications = db.notifications;

const Reports = db.reports;

const Tasks = db.tasks;

const Company = db.company;

const CompaniesData = [
  {
    name: 'Tech Innovators Inc.',

    address: '123 Tech Lane, Silicon Valley, CA',

    phone: '123-456-7890',

    email: 'info@techinnovators.com',

    // type code here for "relation_one" field
  },

  {
    name: 'Global Solutions Ltd.',

    address: '456 Global St, New York, NY',

    phone: '987-654-3210',

    email: 'contact@globalsolutions.com',

    // type code here for "relation_one" field
  },

  {
    name: 'Enterprise Dynamics',

    address: '789 Enterprise Ave, Austin, TX',

    phone: '555-123-4567',

    email: 'support@enterprisedynamics.com',

    // type code here for "relation_one" field
  },

  {
    name: 'Market Leaders LLC',

    address: '321 Market Blvd, Chicago, IL',

    phone: '444-987-6543',

    email: 'sales@marketleaders.com',

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    name: 'Frank Harris',

    email: 'frank.harris@example.com',

    phone: '666-777-8888',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Grace Lee',

    email: 'grace.lee@example.com',

    phone: '999-000-1111',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Henry Clark',

    email: 'henry.clark@example.com',

    phone: '222-333-4444',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Ivy Scott',

    email: 'ivy.scott@example.com',

    phone: '555-666-7777',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const DocumentsData = [
  {
    title: 'Product Brochure',

    // type code here for "files" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Service Agreement',

    // type code here for "files" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Proposal Document',

    // type code here for "files" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Meeting Notes',

    // type code here for "files" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const EmailsData = [
  {
    subject: 'Welcome to CRM2024',

    body: 'Thank you for signing up for CRM2024. We are excited to have you on board.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'Follow-up on Your Inquiry',

    body: 'We wanted to follow up on your recent inquiry about our services.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'Meeting Confirmation',

    body: 'This is a confirmation for our scheduled meeting.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'Proposal for Your Review',

    body: 'Please find attached the proposal for your review.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Alice Johnson',

    email: 'alice.johnson@example.com',

    phone: '111-222-3333',

    status: 'Converted',

    source: 'Website',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Bob Martin',

    email: 'bob.martin@example.com',

    phone: '444-555-6666',

    status: 'Contacted',

    source: 'Referral',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Carol White',

    email: 'carol.white@example.com',

    phone: '777-888-9999',

    status: 'New',

    source: 'Email Campaign',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'David Green',

    email: 'david.green@example.com',

    phone: '000-111-2222',

    status: 'Contacted',

    source: 'Social Media',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const NotificationsData = [
  {
    message: 'New lead assigned to you.',

    read: true,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    message: 'Task due date approaching.',

    read: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    message: 'New document uploaded.',

    read: false,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    message: 'Meeting scheduled with lead.',

    read: true,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ReportsData = [
  {
    title: 'Weekly Sales Report',

    description: 'Summary of sales activities for the week.',

    generated_at: new Date('2023-09-30T08:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Monthly Performance Report',

    description: 'Overview of team performance for the month.',

    generated_at: new Date('2023-09-30T08:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Lead Conversion Report',

    description: 'Analysis of lead conversion rates.',

    generated_at: new Date('2023-09-30T08:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Pipeline Status Report',

    description: 'Current status of leads in the pipeline.',

    generated_at: new Date('2023-09-30T08:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    title: 'Initial Contact',

    description: 'Call the lead to introduce our services.',

    due_date: new Date('2023-10-01T10:00:00Z'),

    priority: 'Low',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Follow-up Email',

    description: 'Send a follow-up email with more details.',

    due_date: new Date('2023-10-02T12:00:00Z'),

    priority: 'High',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Schedule Meeting',

    description: 'Arrange a meeting to discuss requirements.',

    due_date: new Date('2023-10-03T14:00:00Z'),

    priority: 'Low',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Send Proposal',

    description: 'Prepare and send a proposal to the lead.',

    due_date: new Date('2023-10-04T16:00:00Z'),

    priority: 'High',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const CompanyData = [
  {
    name: 'Alfred Kinsey',
  },

  {
    name: 'Ernst Mayr',
  },

  {
    name: 'Anton van Leeuwenhoek',
  },

  {
    name: 'Max Born',
  },
];

// Similar logic for "relation_many"

async function associateUserWithCompany() {
  const relatedCompany0 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setCompany) {
    await User0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setCompany) {
    await User1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setCompany) {
    await User2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setCompany) {
    await User3.setCompany(relatedCompany3);
  }
}

async function associateCompanyWithCompany() {
  const relatedCompany0 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Company0 = await Companies.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Company0?.setCompany) {
    await Company0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Company1 = await Companies.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Company1?.setCompany) {
    await Company1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Company2 = await Companies.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Company2?.setCompany) {
    await Company2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Company3 = await Companies.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Company3?.setCompany) {
    await Company3.setCompany(relatedCompany3);
  }
}

async function associateContactWithCompany() {
  const relatedCompany0 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setCompany) {
    await Contact0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setCompany) {
    await Contact1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setCompany) {
    await Contact2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setCompany) {
    await Contact3.setCompany(relatedCompany3);
  }
}

async function associateContactWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setLead) {
    await Contact0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setLead) {
    await Contact1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setLead) {
    await Contact2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setLead) {
    await Contact3.setLead(relatedLead3);
  }
}

async function associateDocumentWithUploaded_by() {
  const relatedUploaded_by0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Document0 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Document0?.setUploaded_by) {
    await Document0.setUploaded_by(relatedUploaded_by0);
  }

  const relatedUploaded_by1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Document1 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Document1?.setUploaded_by) {
    await Document1.setUploaded_by(relatedUploaded_by1);
  }

  const relatedUploaded_by2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Document2 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Document2?.setUploaded_by) {
    await Document2.setUploaded_by(relatedUploaded_by2);
  }

  const relatedUploaded_by3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Document3 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Document3?.setUploaded_by) {
    await Document3.setUploaded_by(relatedUploaded_by3);
  }
}

async function associateDocumentWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Document0 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Document0?.setLead) {
    await Document0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Document1 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Document1?.setLead) {
    await Document1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Document2 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Document2?.setLead) {
    await Document2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Document3 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Document3?.setLead) {
    await Document3.setLead(relatedLead3);
  }
}

async function associateDocumentWithContact() {
  const relatedContact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document0 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Document0?.setContact) {
    await Document0.setContact(relatedContact0);
  }

  const relatedContact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document1 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Document1?.setContact) {
    await Document1.setContact(relatedContact1);
  }

  const relatedContact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document2 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Document2?.setContact) {
    await Document2.setContact(relatedContact2);
  }

  const relatedContact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document3 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Document3?.setContact) {
    await Document3.setContact(relatedContact3);
  }
}

async function associateDocumentWithCompany() {
  const relatedCompany0 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Document0 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Document0?.setCompany) {
    await Document0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Document1 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Document1?.setCompany) {
    await Document1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Document2 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Document2?.setCompany) {
    await Document2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Document3 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Document3?.setCompany) {
    await Document3.setCompany(relatedCompany3);
  }
}

async function associateEmailWithSent_by() {
  const relatedSent_by0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email0 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Email0?.setSent_by) {
    await Email0.setSent_by(relatedSent_by0);
  }

  const relatedSent_by1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email1 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Email1?.setSent_by) {
    await Email1.setSent_by(relatedSent_by1);
  }

  const relatedSent_by2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email2 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Email2?.setSent_by) {
    await Email2.setSent_by(relatedSent_by2);
  }

  const relatedSent_by3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email3 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Email3?.setSent_by) {
    await Email3.setSent_by(relatedSent_by3);
  }
}

async function associateEmailWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Email0 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Email0?.setLead) {
    await Email0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Email1 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Email1?.setLead) {
    await Email1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Email2 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Email2?.setLead) {
    await Email2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Email3 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Email3?.setLead) {
    await Email3.setLead(relatedLead3);
  }
}

async function associateEmailWithCompany() {
  const relatedCompany0 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Email0 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Email0?.setCompany) {
    await Email0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Email1 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Email1?.setCompany) {
    await Email1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Email2 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Email2?.setCompany) {
    await Email2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Email3 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Email3?.setCompany) {
    await Email3.setCompany(relatedCompany3);
  }
}

async function associateLeadWithAssigned_user() {
  const relatedAssigned_user0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setAssigned_user) {
    await Lead0.setAssigned_user(relatedAssigned_user0);
  }

  const relatedAssigned_user1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setAssigned_user) {
    await Lead1.setAssigned_user(relatedAssigned_user1);
  }

  const relatedAssigned_user2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setAssigned_user) {
    await Lead2.setAssigned_user(relatedAssigned_user2);
  }

  const relatedAssigned_user3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setAssigned_user) {
    await Lead3.setAssigned_user(relatedAssigned_user3);
  }
}

async function associateLeadWithCompany() {
  const relatedCompany0 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setCompany) {
    await Lead0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setCompany) {
    await Lead1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setCompany) {
    await Lead2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Companies.findOne({
    offset: Math.floor(Math.random() * (await Companies.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setCompany) {
    await Lead3.setCompany(relatedCompany3);
  }
}

async function associateNotificationWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Notification0 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Notification0?.setUser) {
    await Notification0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Notification1 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Notification1?.setUser) {
    await Notification1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Notification2 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Notification2?.setUser) {
    await Notification2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Notification3 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Notification3?.setUser) {
    await Notification3.setUser(relatedUser3);
  }
}

async function associateNotificationWithCompany() {
  const relatedCompany0 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Notification0 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Notification0?.setCompany) {
    await Notification0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Notification1 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Notification1?.setCompany) {
    await Notification1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Notification2 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Notification2?.setCompany) {
    await Notification2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Notification3 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Notification3?.setCompany) {
    await Notification3.setCompany(relatedCompany3);
  }
}

async function associateReportWithGenerated_by() {
  const relatedGenerated_by0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Report0 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Report0?.setGenerated_by) {
    await Report0.setGenerated_by(relatedGenerated_by0);
  }

  const relatedGenerated_by1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Report1 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Report1?.setGenerated_by) {
    await Report1.setGenerated_by(relatedGenerated_by1);
  }

  const relatedGenerated_by2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Report2 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Report2?.setGenerated_by) {
    await Report2.setGenerated_by(relatedGenerated_by2);
  }

  const relatedGenerated_by3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Report3 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Report3?.setGenerated_by) {
    await Report3.setGenerated_by(relatedGenerated_by3);
  }
}

async function associateReportWithCompany() {
  const relatedCompany0 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Report0 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Report0?.setCompany) {
    await Report0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Report1 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Report1?.setCompany) {
    await Report1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Report2 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Report2?.setCompany) {
    await Report2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Report3 = await Reports.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Report3?.setCompany) {
    await Report3.setCompany(relatedCompany3);
  }
}

async function associateTaskWithAssigned_user() {
  const relatedAssigned_user0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setAssigned_user) {
    await Task0.setAssigned_user(relatedAssigned_user0);
  }

  const relatedAssigned_user1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setAssigned_user) {
    await Task1.setAssigned_user(relatedAssigned_user1);
  }

  const relatedAssigned_user2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setAssigned_user) {
    await Task2.setAssigned_user(relatedAssigned_user2);
  }

  const relatedAssigned_user3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setAssigned_user) {
    await Task3.setAssigned_user(relatedAssigned_user3);
  }
}

async function associateTaskWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setLead) {
    await Task0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setLead) {
    await Task1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setLead) {
    await Task2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setLead) {
    await Task3.setLead(relatedLead3);
  }
}

async function associateTaskWithCompany() {
  const relatedCompany0 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setCompany) {
    await Task0.setCompany(relatedCompany0);
  }

  const relatedCompany1 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setCompany) {
    await Task1.setCompany(relatedCompany1);
  }

  const relatedCompany2 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setCompany) {
    await Task2.setCompany(relatedCompany2);
  }

  const relatedCompany3 = await Company.findOne({
    offset: Math.floor(Math.random() * (await Company.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setCompany) {
    await Task3.setCompany(relatedCompany3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Companies.bulkCreate(CompaniesData);

    await Contacts.bulkCreate(ContactsData);

    await Documents.bulkCreate(DocumentsData);

    await Emails.bulkCreate(EmailsData);

    await Leads.bulkCreate(LeadsData);

    await Notifications.bulkCreate(NotificationsData);

    await Reports.bulkCreate(ReportsData);

    await Tasks.bulkCreate(TasksData);

    await Company.bulkCreate(CompanyData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithCompany(),

      await associateCompanyWithCompany(),

      await associateContactWithCompany(),

      await associateContactWithLead(),

      await associateDocumentWithUploaded_by(),

      await associateDocumentWithLead(),

      await associateDocumentWithContact(),

      await associateDocumentWithCompany(),

      await associateEmailWithSent_by(),

      await associateEmailWithLead(),

      await associateEmailWithCompany(),

      await associateLeadWithAssigned_user(),

      await associateLeadWithCompany(),

      await associateNotificationWithUser(),

      await associateNotificationWithCompany(),

      await associateReportWithGenerated_by(),

      await associateReportWithCompany(),

      await associateTaskWithAssigned_user(),

      await associateTaskWithLead(),

      await associateTaskWithCompany(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('companies', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('documents', null, {});

    await queryInterface.bulkDelete('emails', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('notifications', null, {});

    await queryInterface.bulkDelete('reports', null, {});

    await queryInterface.bulkDelete('tasks', null, {});

    await queryInterface.bulkDelete('company', null, {});
  },
};
