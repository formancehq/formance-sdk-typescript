# CreateTransactionResponse

## Example Usage

```typescript
import { CreateTransactionResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: CreateTransactionResponse = {
  transaction: {
    metadata: {
      "admin": "true",
    },
    id: 405193n,
    postings: [],
    reference: "ref:001",
    reverted: true,
    timestamp: new Date("2024-09-01T21:53:30.576Z"),
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `transaction`                                                                 | [orchestration.Transaction](../../../sdk/models/orchestration/transaction.md) | :heavy_check_mark:                                                            | N/A                                                                           |