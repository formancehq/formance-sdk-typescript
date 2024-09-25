# Transaction

## Example Usage

```typescript
import { Transaction } from "@formance/formance-sdk/sdk/models/shared";

let value: Transaction = {
  postCommitVolumes: {
    "orders:1": {
      "USD": {
        balance: BigInt("90"),
        input: BigInt("100"),
        output: BigInt("10"),
      },
    },
    "orders:2": {
      "USD": {
        balance: BigInt("90"),
        input: BigInt("100"),
        output: BigInt("10"),
      },
    },
  },
  postings: [
    {
      amount: BigInt("100"),
      asset: "COIN",
      destination: "users:002",
      source: "users:001",
    },
  ],
  preCommitVolumes: {
    "orders:1": {
      "USD": {
        balance: BigInt("90"),
        input: BigInt("100"),
        output: BigInt("10"),
      },
    },
    "orders:2": {
      "USD": {
        balance: BigInt("90"),
        input: BigInt("100"),
        output: BigInt("10"),
      },
    },
  },
  reference: "ref:001",
  timestamp: new Date("2023-06-13T21:53:45.218Z"),
  txid: BigInt("729828"),
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