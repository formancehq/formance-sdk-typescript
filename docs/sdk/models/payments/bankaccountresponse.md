# BankAccountResponse

OK

## Example Usage

```typescript
import { BankAccountResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccountResponse = {
  data: {
    country: "Sweden",
    createdAt: new Date("2025-03-16T06:17:20.627Z"),
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [payments.BankAccount](../../../sdk/models/payments/bankaccount.md)   | :heavy_check_mark:                                                    | A bank account registered with Formance and forwardable to connectors |