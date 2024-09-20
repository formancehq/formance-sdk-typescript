# BankAccountResponse

## Example Usage

```typescript
import { BankAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountResponse = {
  data: {
    connectorID: "<value>",
    country: "Belgium",
    createdAt: new Date("2023-07-01T00:06:54.973Z"),
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md) | :heavy_check_mark:                                              | N/A                                                             |