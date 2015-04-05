
var partyHost = Meteor.userId()

var guestList = [
    {name: "Joe", confirmed: false, items: ["Apples"]},
    {name: "Fred", confirmed: true, items: ["Waffles"]},
    {name: "Louie", confirmed: true, items: ["Cheese", "Apples"]},
    ]

var myEvent = {name: "Eddie's Birthday", hostedBy: partyHost, guests: guestList}

//

var partyHost = Meteor.userId()

var guestList = [
    {name: "Bill", confirmed: false, items: ["Apples"]},
    {name: "Jean", confirmed: true, items: ["Waffles"]},
    {name: "Louie", confirmed: true, items: ["Cheese", "Apples"]},
    ]

var myEvent = {name: "Fred's Happy Hour", hostedBy: partyHost, guests: guestList}