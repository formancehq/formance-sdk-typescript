# BankAccountResponse

OK

## Example Usage

```typescript
import { BankAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountResponse = {
  data: {
    connectorID: "<id>",
    country: "Montserrat",
    createdAt: new Date("2024-02-01T07:02:42.733Z"),
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md) | :heavy_check_mark:                                              | N/A                                                             |