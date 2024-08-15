# ActivityCreateTransactionOutput

## Example Usage

```typescript
import { ActivityCreateTransactionOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityCreateTransactionOutput = {
    data: {
        id: BigInt("696483"),
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
        timestamp: new Date("2023-04-28T23:16:51.301Z"),
    },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.OrchestrationTransaction](../../../sdk/models/shared/orchestrationtransaction.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |