# BankAccountRequest

## Example Usage

```typescript
import { BankAccountRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccountRequest = {
  country: "GB",
  name: "My account",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountNumber`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | Domestic account number. Supply this or an IBAN                     |                                                                     |
| `connectorID`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | Connector to forward the bank account to on creation                |                                                                     |
| `country`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Country the account is held in, as an ISO 3166-1 alpha-2 code       | GB                                                                  |
| `iban`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | International bank account number. Supply this or an account number |                                                                     |
| `metadata`                                                          | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | Arbitrary key/value pairs attached to the bank account              |                                                                     |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | Human-readable name for the bank account                            | My account                                                          |
| `swiftBicCode`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | SWIFT/BIC code identifying the bank                                 |                                                                     |