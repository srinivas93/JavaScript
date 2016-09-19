var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(617)-232-7777",
    address: ['One Infinite Loop','Cupertino','CA','90210']
};

var list = function(friends) {
    for (var person in friends) {
        console.log(person);
    }
    };

var search = function(name) {
for (var key in friends) {
    if(friends[key].firstName === name) {
        console.log(friends[key]);
        return friends[key];
    }
}
};
    

