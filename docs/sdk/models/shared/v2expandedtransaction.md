# V2ExpandedTransaction

## Example Usage

```typescript
import { V2ExpandedTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ExpandedTransaction = {
  id: BigInt("489459"),
  metadata: {
    "admin": "true",
  },
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
  reverted: false,
  timestamp: new Date("2022-09-25T01:42:10.193Z"),
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *BigInt*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `metadata`                                                                                                                                     | Record<string, *string*>                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                                                    |
| `postCommitVolumes`                                                                                                                            | Record<string, Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postings`                                                                                                                                     | [shared.V2Posting](../../../sdk/models/shared/v2posting.md)[]                                                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `preCommitVolumes`                                                                                                                             | Record<string, Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `reference`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | ref:001                                                                                                                                        |
| `reverted`                                                                                                                                     | *boolean*                                                                                                                                      | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |