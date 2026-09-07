# V3GetBankAccountResponse

## Example Usage

```typescript
import { V3GetBankAccountResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetBankAccountResponse = {
  data: {
    createdAt: new Date("2025-01-14T00:28:34.103Z"),
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [payments.V3BankAccount](../../../sdk/models/payments/v3bankaccount.md) | :heavy_check_mark:                                                      | A bank account registered with Formance and forwardable to connectors   |