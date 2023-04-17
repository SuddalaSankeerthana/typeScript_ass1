{
    var itemsData = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "John" },
        { id: 4, name: "David" },
        { id: 5, name: "Jane" },
    ];
    var set1 = new Set();
    function getUniqueElements(items, prop) {
        return items.filter(function checkUnique(item) {
            if (!set1.has(item[prop])) {
                set1.add(item.name);
                return true;
            }
            else
                return false;
        });
    }
    ;
    var uniqueObjects = getUniqueElements(itemsData, "name");
    console.log(uniqueObjects);
}
