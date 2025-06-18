# CountAccountsRequest

## Example Usage

```typescript
import { CountAccountsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CountAccountsRequest = {
  address: "users:.+",
  ledger: "ledger001",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Filter accounts by address pattern (regular expression placed between ^ and $).                                                  | users:.+                                                                                                                         |
| `ledger`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Name of the ledger.                                                                                                              | ledger001                                                                                                                        |
| `metadata`                                                                                                                       | Record<string, *any*>                                                                                                            | :heavy_minus_sign:                                                                                                               | Filter accounts by metadata key value pairs. The filter can be used like this metadata[key]=value1&metadata[a.nested.key]=value2 | metadata[key]=value1&metadata[a.nested.key]=value2                                                                               |