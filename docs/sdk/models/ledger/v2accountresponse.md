# V2AccountResponse

## Example Usage

```typescript
import { V2AccountResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2AccountResponse = {
  v2Account: {
    v2Volumes: {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
    v2Volumes1: {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
    address: "users:001",
    firstUsage: new Date("2023-01-01T00:00:00Z"),
    insertionDate: new Date("2023-01-01T00:00:00Z"),
    metadata: {
      "admin": "true",
    },
    updatedAt: new Date("2023-01-01T00:00:00Z"),
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `v2Account`                                                 | [ledger.V2Account](../../../sdk/models/ledger/v2account.md) | :heavy_check_mark:                                          | N/A                                                         |