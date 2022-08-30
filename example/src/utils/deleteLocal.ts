export async function deleteProp(query: string, prop: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        items.forEach((item: { [x: string]: any; }) => {
                if (item[prop] === prop) {
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

export async function deletePropByID(query: string, id: string, prop: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!);
    try {
        items.forEach((item: { [x: string]: any; id: string; }) => {
                if (item.id === id) {
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

export async function deleteItem(query: string): Promise<any> {
    let item = JSON.parse(localStorage.getItem(query)!);
    if (item === null) {
        return "Item not found";
    }
    localStorage.removeItem(query);
    return "Item deleted";
}

export async function deletePropValue(query: string, prop: string, value: string): Promise<any> {
    let items = JSON.parse(localStorage.getItem(query)!)
    try {
        items.forEach((item: { [x: string]: any; }) => {
                if (item[prop] === value) {
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
