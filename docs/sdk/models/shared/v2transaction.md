# V2Transaction

## Example Usage

```typescript
import { V2Transaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Transaction = {
  id: BigInt("667169"),
  metadata: {
    "admin": "true",
  },
  postCommitEffectiveVolumes: {
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
  preCommitEffectiveVolumes: {
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
  timestamp: new Date("2025-11-22T18:19:40.200Z"),
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *BigInt*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `insertedAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `metadata`                                                                                                                                     | Record<string, *string*>                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                                                    |
| `postCommitEffectiveVolumes`                                                                                                                   | Record<string, Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postCommitVolumes`                                                                                                                            | Record<string, Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `postings`                                                                                                                                     | [shared.V2Posting](../../../sdk/models/shared/v2posting.md)[]                                                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `preCommitEffectiveVolumes`                                                                                                                    | Record<string, Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `preCommitVolumes`                                                                                                                             | Record<string, Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `reference`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | ref:001                                                                                                                                        |
| `reverted`                                                                                                                                     | *boolean*                                                                                                                                      | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `revertedAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |