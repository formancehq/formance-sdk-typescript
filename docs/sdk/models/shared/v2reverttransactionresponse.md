# V2RevertTransactionResponse

## Example Usage

```typescript
import { V2RevertTransactionResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2RevertTransactionResponse = {
  data: {
    id: BigInt("259422"),
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
    timestamp: new Date("2022-07-15T11:46:29.520Z"),
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |