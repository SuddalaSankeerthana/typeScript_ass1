{const itemsData: { id: number; name: string }[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "John" },
  { id: 4, name: "David" },
  { id: 5, name: "Jane" },
];
var set1 = new Set();
 function getUniqueElements(items: { id: number; name: string }[],prop:any
): { id: number; name: string }[] {
  return items.filter(function checkUnique(item:{id:number;name:string}){
  if (!set1.has(item[prop])) {
      set1.add(item.name);
      return true;
    }
  else
  return false;
  })};
const uniqueObjects = getUniqueElements(itemsData,"name");
console.log(uniqueObjects);
}