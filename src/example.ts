import _ from 'lodash'
export function hi(str: string): void {
    // let result: string = "Hello, " + str;
    // console.log(result);

    test1();
}

function test1() {
    var item = {
        symbol: "A",
        num: 10
    };

    interface ListItem {
        key: string,
        value: string
    }
    let myList: ListItem[] = [
        { key: "A", value: "A_Data" },
        { key: "B", value: "B_Data" },
        { key: "C", value: "C_Data" },
    ];

    let t_symbol: string = item.symbol;
    console.log(t_symbol)
    let dest_symbol: string = '';

    for (var i = 0; i < myList.length; i++) {
        if (myList[i].key === t_symbol) {
            dest_symbol = myList[i].key;
        }
    }

    if (_.isEmpty(dest_symbol)) {
        console.log("symbol is empty");
    }
    else {
        console.log("d_symbol =  " + dest_symbol); // symbol A
    }
}
