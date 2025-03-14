# ActivityRevertTransactionOutput

## Example Usage

```typescript
import { ActivityRevertTransactionOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityRevertTransactionOutput = {
  data: {
    id: BigInt("801816"),
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
    timestamp: new Date("2023-07-23T02:28:15.732Z"),
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.OrchestrationTransaction](../../../sdk/models/shared/orchestrationtransaction.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |