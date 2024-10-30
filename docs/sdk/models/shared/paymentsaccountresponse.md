# PaymentsAccountResponse

OK

## Example Usage

```typescript
import { AccountType, PaymentsAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsAccountResponse = {
  data: {
    accountName: "<value>",
    connectorID: "<id>",
    createdAt: new Date("2023-07-15T06:41:15.268Z"),
    defaultAsset: "<value>",
    defaultCurrency: "<value>",
    id: "<id>",
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    type: AccountType.External,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.PaymentsAccount](../../../sdk/models/shared/paymentsaccount.md) | :heavy_check_mark:                                                      | N/A                                                                     |