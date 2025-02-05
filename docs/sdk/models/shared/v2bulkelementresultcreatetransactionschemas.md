# V2BulkElementResultCreateTransactionSchemas

## Example Usage

```typescript
import { V2BulkElementResultCreateTransactionSchemas } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementResultCreateTransactionSchemas = {
  data: {
    id: BigInt("292177"),
    metadata: {
      "admin": "true",
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2025-12-13T08:34:18.669Z"),
  },
  responseType: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `responseType`                                                      | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |