var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
var contactLength1 = contacts.length;
for ( var i = 0; i < contactLength1; i++) {
 if ( lastName === contacts[i].lastName) {
     printPerson(contacts[i]);
 } else {
     console.log("name not found.");
 }
}
}
search("Jones");

var add = function(firstName,lastName,email,phoneNumber) {
   contacts[contacts.length] = {
       firstName : firstName,
       lastName : lastName,
       email : email,
       phoneNumber : phoneNumber 
   }
}
add("Srinivas","Iyer","xyz@gmail.com","123456788");
list();
