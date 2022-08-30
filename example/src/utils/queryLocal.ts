/* Query for an object and a specified prop */
export async function queryByProp(query: string, prop: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        return items.find((item: { [x: string]: string; }) => item[prop] === prop);
    } catch (error) {
        return error
    }
}

/* Query an object, a specified prop and its assigned value and get it returned */
export async function queryByPropAndValue(query: string, prop: string, value: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        return items.find((item: { [x: string]: string; }) => item[prop] === value);
    } catch (error) {
        return error
    }
}

/* Query an Object from LocalStorage */
export async function queryItem(query: string): Promise<any> {
    let item = JSON.parse(localStorage.getItem(query)!);
    if (item === null) {
        return "Item not found";
    }
    return item;
}

