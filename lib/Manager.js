const Employee = require("./Employee");
// This file contains the code for the manager class
class Manager extends Employee { //extend is used to inherit the properties of another class
    // constructor is a method that is called when a new object is created
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;