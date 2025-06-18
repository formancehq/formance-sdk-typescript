# Transaction

## Example Usage

```typescript
import { Transaction } from "@formance/formance-sdk/sdk/models/shared";

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
  timestamp: new Date("2025-06-14T09:08:43.591Z"),
  txid: 185146n,
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                     | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `postCommitVolumes`                                                                                                                            | Record<string, Record<string, [shared.Volume](../../../sdk/models/shared/volume.md)>>                                                          | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postings`                                                                                                                                     | [shared.Posting](../../../sdk/models/shared/posting.md)[]                                                                                      | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `preCommitVolumes`                                                                                                                             | Record<string, Record<string, [shared.Volume](../../../sdk/models/shared/volume.md)>>                                                          | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `reference`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | ref:001                                                                                                                                        |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `txid`                                                                                                                                         | *BigInt*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |