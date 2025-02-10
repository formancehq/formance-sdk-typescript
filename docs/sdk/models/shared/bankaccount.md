# BankAccount

## Example Usage

```typescript
import { BankAccount } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccount = {
  country: "Micronesia",
  createdAt: new Date("2025-08-11T01:59:44.328Z"),
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accountID`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `accountNumber`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `connectorID`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `country`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `iban`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `metadata`                                                                                      | Record<string, *string*>                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `provider`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `relatedAccounts`                                                                               | [shared.BankAccountRelatedAccounts](../../../sdk/models/shared/bankaccountrelatedaccounts.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `swiftBicCode`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |