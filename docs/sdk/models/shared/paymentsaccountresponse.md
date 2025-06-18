# PaymentsAccountResponse

OK

## Example Usage

```typescript
import { AccountType, PaymentsAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsAccountResponse = {
  data: {
    accountName: "<value>",
    connectorID: "<id>",
    createdAt: new Date("2023-01-26T12:19:35.723Z"),
    defaultAsset: "<value>",
    defaultCurrency: "<value>",
    id: "<id>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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