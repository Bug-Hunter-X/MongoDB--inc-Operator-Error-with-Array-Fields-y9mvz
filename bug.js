```javascript
// Incorrect use of $inc operator with an array
db.collection.updateOne({ _id: 1 }, { $inc: { arr: 1 } });
```