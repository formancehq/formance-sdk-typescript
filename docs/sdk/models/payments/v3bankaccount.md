# V3BankAccount

A bank account registered with Formance and forwardable to connectors

## Example Usage

```typescript
import { V3BankAccount } from "@formance/formance-sdk/sdk/models/payments";

let value: V3BankAccount = {
  createdAt: new Date("2025-05-24T03:55:34.117Z"),
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accountNumber`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Domestic account number, when the account is identified that way                                      |
| `country`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Country the account is held in, as an ISO 3166-1 alpha-2 code                                         |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | When the bank account was registered                                                                  |
| `iban`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | International bank account number, when the account is identified that way                            |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Unique identifier of the bank account within Formance                                                 |
| `metadata`                                                                                            | Record<string, *string*>                                                                              | :heavy_minus_sign:                                                                                    | Arbitrary key/value pairs attached to the resource                                                    |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Human-readable name of the bank account                                                               |
| `relatedAccounts`                                                                                     | [payments.V3BankAccountRelatedAccount](../../../sdk/models/payments/v3bankaccountrelatedaccount.md)[] | :heavy_minus_sign:                                                                                    | Provider-side accounts this bank account has been forwarded to                                        |
| `swiftBicCode`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | SWIFT/BIC code identifying the bank                                                                   |