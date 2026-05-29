# AccountRequest

## Example Usage

```typescript
import { AccountRequest, AccountType } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountRequest = {
  accountType: AccountType.External,
  connectorID: "<id>",
  createdAt: new Date("2025-06-05T04:47:34.055Z"),
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountMetadata`                                                                             | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `accountType`                                                                                 | [payments.AccountType](../../../sdk/models/payments/accounttype.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |