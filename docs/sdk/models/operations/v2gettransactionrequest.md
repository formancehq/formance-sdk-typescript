# V2GetTransactionRequest

## Example Usage

```typescript
import { V2GetTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetTransactionRequest = {
  id: BigInt("1234"),
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expand`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Transaction ID.                                                                               | 1234                                                                                          |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the ledger.                                                                           | ledger001                                                                                     |
| `pit`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |