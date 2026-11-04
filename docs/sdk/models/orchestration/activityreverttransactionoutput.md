# ActivityRevertTransactionOutput

Result of the activity that reverts a ledger transaction

## Example Usage

```typescript
import { ActivityRevertTransactionOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityRevertTransactionOutput = {
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

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [orchestration.Transaction](../../../sdk/models/orchestration/transaction.md) | :heavy_check_mark:                                                            | A transaction recorded in the ledger, carrying its postings and metadata      |