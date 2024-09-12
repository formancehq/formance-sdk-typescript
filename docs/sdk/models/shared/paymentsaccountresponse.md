# PaymentsAccountResponse

## Example Usage

```typescript
import { AccountType, PaymentsAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsAccountResponse = {
  data: {
    accountName: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2023-09-27T14:18:38.574Z"),
    defaultAsset: "<value>",
    defaultCurrency: "<value>",
    id: "<id>",
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    type: AccountType.Internal,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.PaymentsAccount](../../../sdk/models/shared/paymentsaccount.md) | :heavy_check_mark:                                                      | N/A                                                                     |