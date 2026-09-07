# V3Balance

## Example Usage

```typescript
import { V3Balance } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Balance = {
  accountID: "<id>",
  asset: "<value>",
  balance: 814379n,
  createdAt: new Date("2024-12-08T10:40:12.734Z"),
  lastUpdatedAt: new Date("2024-07-01T02:45:23.699Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the account this balance belongs to                                             |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Asset the balance is denominated in                                                           |
| `balance`                                                                                     | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Amount held, in the asset's smallest unit                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of the period this balance covers                                                       |
| `lastUpdatedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the balance was last refreshed from the provider                                         |