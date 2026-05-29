# V2AccountResponse

## Example Usage

```typescript
import { V2AccountResponse } from "@formance/formance-sdk/sdk/models/orchestration";

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
    metadata: {
      "admin": "true",
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `v2Account`                                                               | [orchestration.V2Account](../../../sdk/models/orchestration/v2account.md) | :heavy_check_mark:                                                        | N/A                                                                       |