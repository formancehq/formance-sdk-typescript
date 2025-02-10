# V3BankAccount

## Example Usage

```typescript
import { V3BankAccount } from "@formance/formance-sdk/sdk/models/shared";

let value: V3BankAccount = {
  createdAt: new Date("2025-07-12T14:05:06.729Z"),
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `accountNumber`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `createdAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `iban`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `metadata`                                                                                        | Record<string, *string*>                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `relatedAccounts`                                                                                 | [shared.V3BankAccountRelatedAccount](../../../sdk/models/shared/v3bankaccountrelatedaccount.md)[] | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `swiftBicCode`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |