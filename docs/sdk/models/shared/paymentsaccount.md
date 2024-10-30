# PaymentsAccount

## Example Usage

```typescript
import { AccountType, PaymentsAccount } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsAccount = {
  accountName: "<value>",
  connectorID: "<id>",
  createdAt: new Date("2023-04-10T05:03:15.773Z"),
  defaultAsset: "<value>",
  defaultCurrency: "<value>",
  id: "<id>",
  metadata: {
    "key": "<value>",
  },
  raw: {},
  reference: "<value>",
  type: AccountType.Internal,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `connectorID`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `defaultAsset`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`defaultCurrency`~~                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `metadata`                                                                                                              | Record<string, *string*>                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `pools`                                                                                                                 | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `provider`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `raw`                                                                                                                   | [shared.PaymentsAccountRaw](../../../sdk/models/shared/paymentsaccountraw.md)                                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `reference`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `type`                                                                                                                  | [shared.AccountType](../../../sdk/models/shared/accounttype.md)                                                         | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |