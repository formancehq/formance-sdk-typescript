# AccountResponse

OK

## Example Usage

```typescript
import { AccountResponse, AccountType } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountResponse = {
  account: {
    accountMetadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    accountType: AccountType.Unknown,
    accountName: "<value>",
    connectorID: "<id>",
    createdAt: new Date("2025-05-01T23:37:37.511Z"),
    defaultAsset: "<value>",
    defaultCurrency: "<value>",
    id: "<id>",
    raw: {},
    reference: "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `account`                                                   | [payments.Account](../../../sdk/models/payments/account.md) | :heavy_check_mark:                                          | N/A                                                         |