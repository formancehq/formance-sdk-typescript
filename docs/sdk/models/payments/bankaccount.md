# BankAccount

A bank account registered with Formance and forwardable to connectors

## Example Usage

```typescript
import { BankAccount } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccount = {
  country: "Moldova",
  createdAt: new Date("2024-04-15T09:09:38.246Z"),
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Identifier of the provider-side account created by forwarding                                       |
| `accountNumber`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Domestic account number, when the account is identified that way                                    |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Identifier of the connector the account has been forwarded to                                       |
| `country`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | Country the account is held in, as an ISO 3166-1 alpha-2 code                                       |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | When the bank account was registered                                                                |
| `iban`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | International bank account number, when the account is identified that way                          |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique identifier of the bank account within Formance                                               |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | Arbitrary key/value pairs attached to the bank account                                              |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | Human-readable name of the bank account                                                             |
| `provider`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Name of the payment provider behind the connector                                                   |
| `relatedAccounts`                                                                                   | [payments.BankAccountRelatedAccounts](../../../sdk/models/payments/bankaccountrelatedaccounts.md)[] | :heavy_minus_sign:                                                                                  | Provider-side accounts this bank account has been forwarded to                                      |
| `swiftBicCode`                                                                                      | *string*                                                                                            | :heavy_minus_sign:                                                                                  | SWIFT/BIC code identifying the bank                                                                 |