# CountAccountsRequest

## Example Usage

```typescript
import { CountAccountsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CountAccountsRequest = {
    address: "users:.+",
    ledger: "ledger001",
    metadata: {
        "0": "m",
        "1": "e",
        "2": "t",
        "3": "a",
        "4": "d",
        "5": "a",
        "6": "t",
        "7": "a",
        "8": "[",
        "9": "k",
        "10": "e",
        "11": "y",
        "12": "]",
        "13": "=",
        "14": "v",
        "15": "a",
        "16": "l",
        "17": "u",
        "18": "e",
        "19": "1",
        "20": "&",
        "21": "m",
        "22": "e",
        "23": "t",
        "24": "a",
        "25": "d",
        "26": "a",
        "27": "t",
        "28": "a",
        "29": "[",
        "30": "a",
        "31": ".",
        "32": "n",
        "33": "e",
        "34": "s",
        "35": "t",
        "36": "e",
        "37": "d",
        "38": ".",
        "39": "k",
        "40": "e",
        "41": "y",
        "42": "]",
        "43": "=",
        "44": "v",
        "45": "a",
        "46": "l",
        "47": "u",
        "48": "e",
        "49": "2",
    },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Filter accounts by address pattern (regular expression placed between ^ and $).                                                  | users:.+                                                                                                                         |
| `ledger`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Name of the ledger.                                                                                                              | ledger001                                                                                                                        |
| `metadata`                                                                                                                       | Record<string, *any*>                                                                                                            | :heavy_minus_sign:                                                                                                               | Filter accounts by metadata key value pairs. The filter can be used like this metadata[key]=value1&metadata[a.nested.key]=value2 | metadata[key]=value1&metadata[a.nested.key]=value2                                                                               |