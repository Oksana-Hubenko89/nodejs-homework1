// const { listContacts, getContactById, removeContact, addContact } = require('./contacts.js')
// const { Command } = require('commander')
// const program = new Command()

// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone')

// program.parse(process.argv)

// const argv = program.opts()

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       listContacts()
//       break

//     case 'get':
//       getContactById(id)
//       break

//     case 'add':
//       addContact(name, email, phone)
//       break

//     case 'remove':
//       removeContact(id)
//       break

//     default:
//       console.warn('\x1B[31m Unknown action type!')
//   }
// }

// invokeAction(argv)

const contacts = require('./contacts');
const yargs = require('yargs');
//const chalk = require('./utils');
const chalk = require('chalk');
const argv = yargs.argv;
async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case 'list':
			const list = await contacts.listContacts();
			console.log(chalk.green('Get contact list'));
			console.table(list);
			break;
		case 'get':
			const contact = await contacts.getContactById(id);
			console.log(chalk.green('Get contact by ID'));
			console.table(contact);
			break;
		case 'add':
			const newContact = await contacts.addContact(name, email, phone);
			console.log(chalk.green('Add contact'));
			console.table(newContact);
			break;
		case 'remove':
			await contacts.removeContact(id);
			console.log(chalk.green(`Remove contact with ID ${id}`));
			break;
		default:
			console.warn('\x1B[31m Unknown action type!');
	}
}
invokeAction(argv);

