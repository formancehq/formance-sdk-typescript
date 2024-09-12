# Transactions

## Example Usage

```typescript
import { Transactions } from "@formance/formance-sdk/sdk/models/shared";

let value: Transactions = {
  transactions: [
    {
      postings: [
        {
          amount: BigInt("100"),
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `transactions`                                                            | [shared.TransactionData](../../../sdk/models/shared/transactiondata.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |