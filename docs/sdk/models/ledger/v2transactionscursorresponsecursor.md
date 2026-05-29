# V2TransactionsCursorResponseCursor

## Example Usage

```typescript
import { V2TransactionsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2TransactionsCursorResponseCursor = {
  data: [
    {
      v2AggregatedVolumes: {
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
      v2AggregatedVolumes1: {
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
      v2AggregatedVolumes2: {
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
      v2AggregatedVolumes3: {
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
      v2Metadata: {
        "admin": "true",
      },
      id: 549671n,
      postings: [],
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2026-06-22T11:57:12.314Z"),
    },
  ],
  hasMore: false,
  next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [ledger.V2Transaction](../../../sdk/models/ledger/v2transaction.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `hasMore`                                                             | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   | false                                                                 |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=                                      |
| `pageSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 15                                                                    |
| `previous`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                          |