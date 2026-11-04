# GetTransactionResponseData

## Example Usage

```typescript
import { GetTransactionResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: GetTransactionResponseData = {
  transaction: {
    id: 160096,
    metadata: {
      "key": "<value>",
    },
    postings: [
      {
        amount: 956606n,
        asset: "<value>",
        color: "magenta",
        destination: "<value>",
        source: "<value>",
      },
    ],
    reverted: true,
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `transaction`                                                                       | [ledgerV3.TransactionResponse](../../../sdk/models/ledgerV3/transactionresponse.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |