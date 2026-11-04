# ActivityGetAccountOutput

Result of the activity that reads a ledger account

## Example Usage

```typescript
import { ActivityGetAccountOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityGetAccountOutput = {
  data: {
    address: "users:001",
    effectiveVolumes: {
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
    metadata: {
      "admin": "true",
    },
    volumes: {
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
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [orchestration.Account](../../../sdk/models/orchestration/account.md) | :heavy_check_mark:                                                    | An account in the ledger, identified by its address                   |