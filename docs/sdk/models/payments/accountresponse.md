# AccountResponse

OK

## Example Usage

```typescript
import { AccountResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountResponse = {
  data: {
    accountName: "<value>",
    connectorID: "<id>",
    createdAt: new Date("2025-08-25T20:14:14.116Z"),
    defaultAsset: "<value>",
    defaultCurrency: "<value>",
    id: "<id>",
    metadata: {},
    raw: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    reference: "<value>",
    type: "INTERNAL",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [payments.Account](../../../sdk/models/payments/account.md) | :heavy_check_mark:                                          | N/A                                                         |