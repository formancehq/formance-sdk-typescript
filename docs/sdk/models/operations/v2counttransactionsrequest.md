# V2CountTransactionsRequest

## Example Usage

```typescript
import { V2CountTransactionsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CountTransactionsRequest = {
    ledger: "ledger001",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the ledger.                                                                           | ledger001                                                                                     |
| `pit`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `query`                                                                                       | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |