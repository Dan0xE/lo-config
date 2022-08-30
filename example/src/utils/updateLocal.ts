export async function updatePropValue(query: string, prop: string, value: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        items.forEach((item: { [x: string]: string; }) => {
                if (item[prop] === value) {
                    item[prop] = value;
                }
            }
        );
        localStorage.setItem(query, JSON.stringify(items));
        return "Item updated";
    } catch (error) {
        return error;
    }
}

export async function updatePropValueByID(query: string, id: string, prop: string, value: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        items.forEach((item: { [x: string]: string; id: string; }) => {
                if (item.id === id) {
                    item[prop] = value;
                }
            }
        );
        localStorage.setItem(query, JSON.stringify(items));
        return "Item updated";
    } catch (error) {
        return error;
    }
}

export async function renameProp(query: string, prop: string, newProp: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        items.forEach((item: { [x: string]: any; }) => {
                if (item[prop] === item[newProp]) {
                    item[newProp] = item[prop];
                    delete item[prop];
                }
            }
        );
        localStorage.setItem(query, JSON.stringify(items));
        return "Item updated";
    } catch (error) {
        return error;
    }
}
