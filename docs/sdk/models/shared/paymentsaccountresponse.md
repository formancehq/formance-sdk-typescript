# PaymentsAccountResponse

## Example Usage

```typescript
import { AccountType, PaymentsAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsAccountResponse = {
  data: {
    accountName: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2024-04-12T08:34:45.892Z"),
    defaultAsset: "<value>",
    defaultCurrency: "<value>",
    id: "<id>",
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    type: AccountType.Unknown,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.PaymentsAccount](../../../sdk/models/shared/paymentsaccount.md) | :heavy_check_mark:                                                      | N/A                                                                     |