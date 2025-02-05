# ActivityCreateTransactionOutput

## Example Usage

```typescript
import { ActivityCreateTransactionOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityCreateTransactionOutput = {
  data: {
    id: BigInt("599581"),
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
    timestamp: new Date("2024-04-16T11:28:38.206Z"),
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.OrchestrationTransaction](../../../sdk/models/shared/orchestrationtransaction.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |