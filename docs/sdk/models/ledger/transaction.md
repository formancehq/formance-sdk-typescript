# Transaction

A transaction recorded in the ledger, carrying its postings and metadata

## Example Usage

```typescript
import { Transaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: Transaction = {
  postCommitVolumes: {
    "orders:1": {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
    "orders:2": {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
  },
  postings: [],
  preCommitVolumes: {
    "orders:1": {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
    "orders:2": {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
  },
  reference: "ref:001",
  timestamp: new Date("2026-06-14T09:08:43.591Z"),
  txid: 185146n,
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                            | Record<string, *any*>                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                    | Arbitrary key/value pairs attached to the resource                                                                                                                    |                                                                                                                                                                       |
| `postCommitVolumes`                                                                                                                                                   | Record<string, Record<string, [ledger.Volume](../../../sdk/models/ledger/volume.md)>>                                                                                 | :heavy_minus_sign:                                                                                                                                                    | Volumes aggregated per account and per asset                                                                                                                          | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postings`                                                                                                                                                            | [ledger.Posting](../../../sdk/models/ledger/posting.md)[]                                                                                                             | :heavy_check_mark:                                                                                                                                                    | The fund movements making up the transaction                                                                                                                          |                                                                                                                                                                       |
| `preCommitVolumes`                                                                                                                                                    | Record<string, Record<string, [ledger.Volume](../../../sdk/models/ledger/volume.md)>>                                                                                 | :heavy_minus_sign:                                                                                                                                                    | Volumes aggregated per account and per asset                                                                                                                          | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `reference`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Optional caller-supplied identifier, unique within the ledger, used to deduplicate transactions                                                                       | ref:001                                                                                                                                                               |
| `timestamp`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | The transaction time: when the transaction is considered to have occurred. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |                                                                                                                                                                       |
| `txid`                                                                                                                                                                | *BigInt*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Unique sequential identifier for this transaction within the ledger                                                                                                   |                                                                                                                                                                       |