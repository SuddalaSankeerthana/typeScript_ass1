# typeScript_ass1
script.js and script.ts are related to problem statement1
script2.js and script2.ts are related to problem statement2
Problem Statement - 1:
Write a function that takes an array of objects and returns an array containing only the unique objects based on a specified property.
The function should take two arguments:
● items: an array of objects.
● prop: a string representing the name of the property to use for filtering the unique
objects.
The function should return an array of objects containing only the unique objects based on the specified property. If multiple objects have the same value for the specified property, only the first occurrence should be included in the result.
For example, const items = [
{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "John" }, { id: 4, name: "Bob" }, { id: 5, name: "Jane" }
];
If we call function(items, "name"), the function should return: [
{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 4, name: "Bob" }
]
Problem Statement - 2:
Write a function that takes an arbitrary number of objects as arguments and returns a new object that merges all the properties of the input objects.
The function should work as follows:
● If multiple input objects have a property with the same name, the value from the last object should be used.
● The output object should not have any properties with undefined or null values.
● The output object should have the same type as the first input object.
For example,
const obj1 = { a: 1, b: "hello" }; const obj2 = { b: "world", c: true }; const obj3 = { c: false, d: [1, 2, 3] };
If we call function(obj1, obj2, obj3), the function should return:
{ a: 1, b: "world", c: false, d: [1, 2, 3] }
