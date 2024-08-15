# V2CreateTransactionResponse

## Example Usage

```typescript
import { V2CreateTransactionResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2CreateTransactionResponse = {
    data: {
        id: BigInt("69859"),
        metadata: {
            admin: "true",
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
        timestamp: new Date("2023-10-07T00:13:15.043Z"),
    },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |