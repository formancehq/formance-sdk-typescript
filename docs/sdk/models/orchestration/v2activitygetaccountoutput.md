# V2ActivityGetAccountOutput

Result of the activity that reads a ledger account

## Example Usage

```typescript
import { V2ActivityGetAccountOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityGetAccountOutput = {
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [orchestration.V2Account](../../../sdk/models/orchestration/v2account.md) | :heavy_check_mark:                                                        | An account in the ledger, identified by its address                       |