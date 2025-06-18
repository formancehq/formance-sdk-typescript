# Transactions

## Example Usage

```typescript
import { Transactions } from "@formance/formance-sdk/sdk/models/shared";

let value: Transactions = {
  transactions: [
    {
      postings: [],
      reference: "ref:001",
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `transactions`                                                            | [shared.TransactionData](../../../sdk/models/shared/transactiondata.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |