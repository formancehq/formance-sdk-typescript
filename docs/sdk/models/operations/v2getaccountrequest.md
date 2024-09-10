# V2GetAccountRequest

## Example Usage

```typescript
import { V2GetAccountRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetAccountRequest = {
  address: "users:001",
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `address`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Exact address of the account. It must match the following regular expressions pattern:<br/>```<br/>^\w+(:\w+)*$<br/>```<br/> | users:001                                                                                                    |
| `expand`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `ledger`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the ledger.                                                                                          | ledger001                                                                                                    |
| `pit`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |