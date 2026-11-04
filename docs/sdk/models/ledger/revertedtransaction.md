# RevertedTransaction

The original transaction that was reverted

## Example Usage

```typescript
import { RevertedTransaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: RevertedTransaction = {
  id: 276761n,
  metadata: {
    "admin": "true",
  },
  postCommitEffectiveVolumes: {
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
  preCommitEffectiveVolumes: {
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
  reverted: false,
  timestamp: new Date("2025-10-28T17:15:27.985Z"),
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                  | *BigInt*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Unique sequential identifier for this transaction within the ledger                                                                                                   |                                                                                                                                                                       |
| `insertedAt`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_minus_sign:                                                                                                                                                    | The request time: when the transaction was actually written to the ledger. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |                                                                                                                                                                       |
| `metadata`                                                                                                                                                            | Record<string, *string*>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Arbitrary key/value pairs attached to the resource                                                                                                                    | {<br/>"admin": "true"<br/>}                                                                                                                                           |
| `postCommitEffectiveVolumes`                                                                                                                                          | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                                             | :heavy_minus_sign:                                                                                                                                                    | Volumes aggregated per account and per asset                                                                                                                          | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postCommitVolumes`                                                                                                                                                   | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                                             | :heavy_minus_sign:                                                                                                                                                    | Volumes aggregated per account and per asset                                                                                                                          | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postings`                                                                                                                                                            | [ledger.V2Posting](../../../sdk/models/ledger/v2posting.md)[]                                                                                                         | :heavy_check_mark:                                                                                                                                                    | The fund movements making up the transaction                                                                                                                          |                                                                                                                                                                       |
| `preCommitEffectiveVolumes`                                                                                                                                           | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                                             | :heavy_minus_sign:                                                                                                                                                    | Volumes aggregated per account and per asset                                                                                                                          | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `preCommitVolumes`                                                                                                                                                    | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                                             | :heavy_minus_sign:                                                                                                                                                    | Volumes aggregated per account and per asset                                                                                                                          | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `reference`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Optional caller-supplied identifier, unique within the ledger                                                                                                         |                                                                                                                                                                       |
| `reverted`                                                                                                                                                            | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Indicates if the transaction has been reverted                                                                                                                        |                                                                                                                                                                       |
| `revertedAt`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_minus_sign:                                                                                                                                                    | When the transaction was reverted, on the request-time axis                                                                                                           |                                                                                                                                                                       |
| `template`                                                                                                                                                            | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Transaction template used                                                                                                                                             |                                                                                                                                                                       |
| `timestamp`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | The transaction time: when the transaction is considered to have occurred. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |                                                                                                                                                                       |
| `updatedAt`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_minus_sign:                                                                                                                                                    | When the transaction row was last modified                                                                                                                            |                                                                                                                                                                       |