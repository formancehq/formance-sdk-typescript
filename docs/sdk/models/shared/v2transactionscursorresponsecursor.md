# V2TransactionsCursorResponseCursor

## Example Usage

```typescript
import { V2TransactionsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TransactionsCursorResponseCursor = {
  data: [
    {
      id: 549671n,
      metadata: {
        "admin": "true",
      },
      postCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        "orders:2": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
      },
      postCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        "orders:2": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
      },
      postings: [],
      preCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        "orders:2": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
      },
      preCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        "orders:2": {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
      },
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2026-06-22T11:57:12.314Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `hasMore`                                                             | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   | false                                                                 |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `pageSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 15                                                                    |
| `previous`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                          |