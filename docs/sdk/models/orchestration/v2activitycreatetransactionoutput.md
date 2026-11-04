# V2ActivityCreateTransactionOutput

Result of the activity that writes a transaction to a ledger

## Example Usage

```typescript
import { V2ActivityCreateTransactionOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityCreateTransactionOutput = {
  data: [
    {
      metadata: {
        "admin": "true",
      },
      postings: [],
      reference: "ref:001",
      timestamp: new Date("2026-03-28T10:26:16.538Z"),
      txid: 910526n,
    },
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [orchestration.V2Transaction](../../../sdk/models/orchestration/v2transaction.md)[] | :heavy_check_mark:                                                                  | The transactions that were created                                                  |