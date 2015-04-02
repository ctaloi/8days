# 8days

[Josh Owens](http://joshowens.me) [8 Days of Meteor Course](https://meteorjs.club/8days)

## Notes from Day 3

- [x] Created new Meteor collection available to client and server (both/collections.js)
- [x] Insert into new collection collection
- [x] Update events collection using $set and insert
- [x] Add item object to event collection

### Console Action

```javascript
var partyHost = Meteor.userId()

var guestList = [
	{name: "Joe", confirmed: false, items: ["Apples"]},
	{name: "Fred", confirmed: true, items: ["Waffles"]},
	{name: "Louie", confirmed: true, items: ["Cheese", "Apples"]},
	]

var myEvent = {name: "Eddie's Birthday", hostedBy: partyHost, guests: guestList}
```

```json

{
  "_id": "RbdX9N3s4gJca8trL",
  "name": "Eddie's Birthday",
  "hostedBy": "w9KwxyQttYMKbsGtP",
  "guests": [
    {
      "name": "Joe",
      "confirmed": false,
      "items": [
        "Apples"
      ]
    },
    {
      "name": "Fred",
      "confirmed": true,
      "items": [
        "Waffles"
      ]
    },
    {
      "name": "Louie",
      "confirmed": true,
      "items": [
        "Cheese",
        "Apples"
      ]
    }
  ]
}