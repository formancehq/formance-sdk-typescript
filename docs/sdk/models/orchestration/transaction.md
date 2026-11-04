# Transaction

A transaction recorded in the ledger, carrying its postings and metadata

## Example Usage

```typescript
import { Transaction } from "@formance/formance-sdk/sdk/models/orchestration";

let value: Transaction = {
  id: 265587n,
  metadata: {
    "admin": "true",
  },
  postings: [
    {
      amount: 100n,
      asset: "COIN",
      destination: "users:002",
      source: "users:001",
    },
  ],
  reference: "ref:001",
  reverted: true,
  timestamp: new Date("2024-11-24T23:17:28.443Z"),
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                  | *BigInt*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Unique sequential identifier for this transaction within the ledger                                                                                                   |                                                                                                                                                                       |
| `metadata`                                                                                                                                                            | Record<string, *string*>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Arbitrary key/value pairs attached to the resource                                                                                                                    | {<br/>"admin": "true"<br/>}                                                                                                                                           |
| `postings`                                                                                                                                                            | [orchestration.Posting](../../../sdk/models/orchestration/posting.md)[]                                                                                               | :heavy_check_mark:                                                                                                                                                    | The fund movements making up the transaction                                                                                                                          |                                                                                                                                                                       |
| `reference`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Optional caller-supplied identifier, unique within the ledger, used to deduplicate transactions                                                                       | ref:001                                                                                                                                                               |
| `reverted`                                                                                                                                                            | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Indicates if the transaction has been reverted                                                                                                                        |                                                                                                                                                                       |
| `timestamp`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | The transaction time: when the transaction is considered to have occurred. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |                                                                                                                                                                       |