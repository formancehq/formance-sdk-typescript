# BankAccountResponse

OK

## Example Usage

```typescript
import { BankAccountResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccountResponse = {
  bankAccount: {
    country: "Sweden",
    createdAt: new Date("2025-03-16T06:17:20.627Z"),
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `bankAccount`                                                       | [payments.BankAccount](../../../sdk/models/payments/bankaccount.md) | :heavy_check_mark:                                                  | N/A                                                                 |