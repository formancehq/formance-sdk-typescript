# V2BulkElementResultRevertTransactionSchemas

## Example Usage

```typescript
import { V2BulkElementResultRevertTransactionSchemas } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementResultRevertTransactionSchemas = {
  data: {
    id: BigInt("5152"),
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
    timestamp: new Date("2024-01-31T19:07:41.241Z"),
  },
  responseType: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `responseType`                                                      | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |