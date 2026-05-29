# V2Account

## Example Usage

```typescript
import { V2Account } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2Account = {
  v2Volumes: {
    "USD": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
    "EUR": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
  },
  v2Volumes1: {
    "USD": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
    "EUR": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
  },
  address: "users:001",
  firstUsage: new Date("2023-01-01T00:00:00Z"),
  insertionDate: new Date("2023-01-01T00:00:00Z"),
  metadata: {
    "admin": "true",
  },
  updatedAt: new Date("2023-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `v2Volumes`                                                                                                    | Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
| `v2Volumes1`                                                                                                   | Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
| `address`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | users:001                                                                                                      |
| `firstUsage`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 2023-01-01T00:00:00Z                                                                                           |
| `insertionDate`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 2023-01-01T00:00:00Z                                                                                           |
| `metadata`                                                                                                     | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                    |
| `updatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 2023-01-01T00:00:00Z                                                                                           |