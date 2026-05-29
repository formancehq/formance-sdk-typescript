# Account

## Example Usage

```typescript
import { Account, AccountType } from "@formance/formance-sdk/sdk/models/payments";

let value: Account = {
  accountMetadata: {
    "key": "<value>",
  },
  accountType: AccountType.Unknown,
  accountName: "<value>",
  connectorID: "<id>",
  createdAt: new Date("2026-04-08T09:59:20.375Z"),
  defaultAsset: "<value>",
  defaultCurrency: "<value>",
  id: "<id>",
  raw: {},
  reference: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountMetadata`                                                                                                       | Record<string, *string*>                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `accountType`                                                                                                           | [payments.AccountType](../../../sdk/models/payments/accounttype.md)                                                     | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `accountName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `connectorID`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `defaultAsset`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`defaultCurrency`~~                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `pools`                                                                                                                 | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `provider`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `raw`                                                                                                                   | [payments.AccountRaw](../../../sdk/models/payments/accountraw.md)                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `reference`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |