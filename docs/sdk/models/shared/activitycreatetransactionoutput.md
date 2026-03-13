# ActivityCreateTransactionOutput

## Example Usage

```typescript
import { ActivityCreateTransactionOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityCreateTransactionOutput = {
  data: {
    id: 194985n,
    metadata: {
      "admin": "true",
    },
    postings: [],
    reference: "ref:001",
    reverted: true,
    timestamp: new Date("2025-09-30T06:28:56.548Z"),
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.OrchestrationTransaction](../../../sdk/models/shared/orchestrationtransaction.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |