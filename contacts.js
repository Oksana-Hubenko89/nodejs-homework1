// import * as fs from "fs/promises"
// import path from 'path'
//import contacts from "./contacts";

const shortid = require('shortid')
const fs = require('fs').promises
// const { promises: fsPromise } = fs
const path=require('path')
//const { readFile } = require('fs/promises')
const contactsPath = path.dirname('./db/contacts.json')


                                                                                                
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.log(err.message)
    }
    console.table(JSON.parse(data.toString))
  })
}

function getContactById(contactId) {
      fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          console.log(err.message)
        }
        const contacts = JSON.parse(data.toString())
        const contact = contacts.find(({ id }) => id.toString() === contactId)
        if (result === undefined) {
          console.log('Contact undefined');
          return
        }
        console.table(contact);
    
      })
    }

function removeContact(contactId) {
      fs.readFile(contactPath, (err, data) => {
        if (err) {
          console.log(err.message)
        }
        const contacts = JSON.parse(data)
        const newContacts = contacts.filter(({ id }) => id.toString !== contactId)
        if (newContacts === undefined) {
          console.log('Contact undefined')
        }
        fs.readFile(contactPath, JSON.stringify(newContacts))
        console.log('Contact deleted')
        listContacts()
      })
    
    }

function addContact(name, email, phone) {
  
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.log(err.message)
        return
    }
    const contacts=JSON.parse(data)
    //JSON.stringify(data)
    const newContact = {
    id: shortid.generate(),
    name,
    email,
    phone
    }
    if (contacts.find(({ name }) => name === name)) {
      console.log('This name exist')
      return
    }
    contacts.push(newContact)

    fs.writeFile(contactPath, JSON.stringify(user), (err,data)=> {
    if (err) {
      console.log(err.message)
    }
      console.log(`Contact ${name} added`)
     
    })
     listContacts()
  })
  
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  }