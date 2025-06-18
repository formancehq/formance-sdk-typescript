# V2Transaction

## Example Usage

```typescript
import { V2Transaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Transaction = {
  id: 918598n,
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
  postings: [
    {
      amount: 100n,
      asset: "COIN",
      destination: "users:002",
      source: "users:001",
    },
  ],
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
  reference: "ref:001",
  reverted: false,
  timestamp: new Date("2024-04-20T12:45:50.043Z"),
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