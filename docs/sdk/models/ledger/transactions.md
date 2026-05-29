# Transactions

## Example Usage

```typescript
import { Transactions } from "@formance/formance-sdk/sdk/models/ledger";

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
| `transactions`                                                            | [ledger.TransactionData](../../../sdk/models/ledger/transactiondata.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |