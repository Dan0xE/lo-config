/* Creates an empty object */
export async function createEmptyItem(query: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    if (items === null) {
        items = [];
    }
    items.push({});
    localStorage.setItem(query, JSON.stringify(items));
    return "Item created";
}

/* Create an object with an empy prop*/
export async function createItem(query: string, item: any): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    if (items === null) {
        items = [];
    }
    items.push(item);
    localStorage.setItem(query, JSON.stringify(items));
    return "Item created";
}

/* Create and object with the item parameter, create a prop that belongs to the object and give it a value  */
export async function createItemAndProp(Item: any, prop: string, value: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(Item)!);
    if (items === null) {
        items = [];
    }
    items.push(Item);
    items.forEach((item: { [x: string]: string; }) => {
            if (item[prop] === value) {
                item[prop] = value;
            }
        }
    );
    localStorage.setItem(Item, JSON.stringify(items));
    return "Item created";
}

/* This creates a prop in a specified object that gets specified via the 'query' parameter */
export async function createProp(query: string, prop: string, value: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        items.forEach((item: { [x: string]: string; }) => {
                item[prop] = value;
            }
        );
        localStorage.setItem(query, JSON.stringify(items));
        return "Item updated";
    } catch (error) {
        return error;
    }
}

