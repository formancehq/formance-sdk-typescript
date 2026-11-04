# V2Transaction

## Example Usage

```typescript
import { V2Transaction } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Transaction = {
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
  timestamp: new Date("2026-11-28T01:58:19.635Z"),
  txid: 592845n,
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                            | Record<string, *string*>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Arbitrary key/value pairs attached to the resource                                                                                                                    | {<br/>"admin": "true"<br/>}                                                                                                                                           |
| `postings`                                                                                                                                                            | [orchestration.V2Posting](../../../sdk/models/orchestration/v2posting.md)[]                                                                                           | :heavy_check_mark:                                                                                                                                                    | The fund movements making up the transaction                                                                                                                          |                                                                                                                                                                       |
| `reference`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Optional caller-supplied identifier, unique within the ledger, used to deduplicate transactions                                                                       | ref:001                                                                                                                                                               |
| `timestamp`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | The transaction time: when the transaction is considered to have occurred. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |                                                                                                                                                                       |
| `txid`                                                                                                                                                                | *BigInt*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Unique sequential identifier for this transaction within the ledger                                                                                                   |                                                                                                                                                                       |