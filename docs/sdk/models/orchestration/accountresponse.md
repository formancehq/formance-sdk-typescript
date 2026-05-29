# AccountResponse

## Example Usage

```typescript
import { AccountResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: AccountResponse = {
  account: {
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
    volumes1: {
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `account`                                                             | [orchestration.Account](../../../sdk/models/orchestration/account.md) | :heavy_check_mark:                                                    | N/A                                                                   |