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

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `bankAccountMetadata`    | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |                          |
| `accountNumber`          | *string*                 | :heavy_minus_sign:       | N/A                      |                          |
| `connectorID`            | *string*                 | :heavy_minus_sign:       | N/A                      |                          |
| `country`                | *string*                 | :heavy_check_mark:       | N/A                      | GB                       |
| `iban`                   | *string*                 | :heavy_minus_sign:       | N/A                      |                          |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      | My account               |
| `swiftBicCode`           | *string*                 | :heavy_minus_sign:       | N/A                      |                          |