# V2LogTransaction

Transaction structure as it appears in log payloads

## Example Usage

```typescript
import { V2LogTransaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LogTransaction = {
  v2AggregatedVolumes: {
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
  v2AggregatedVolumes1: {
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
  v2AggregatedVolumes2: {
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
  v2AggregatedVolumes3: {
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
  v2Metadata: {
    "admin": "true",
  },
  id: 723410n,
  postings: [],
  reverted: false,
  timestamp: new Date("2026-11-18T02:31:49.125Z"),
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `v2AggregatedVolumes`                                                                                                                          | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `v2AggregatedVolumes1`                                                                                                                         | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `v2AggregatedVolumes2`                                                                                                                         | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `v2AggregatedVolumes3`                                                                                                                         | Record<string, Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>>                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            | {<br/>"orders:1": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>},<br/>"orders:2": {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>}<br/>} |
| `v2Metadata`                                                                                                                                   | Record<string, *string*>                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                                                    |
| `id`                                                                                                                                           | *BigInt*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `insertedAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `postings`                                                                                                                                     | [ledger.V2Posting](../../../sdk/models/ledger/v2posting.md)[]                                                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `reference`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `reverted`                                                                                                                                     | *boolean*                                                                                                                                      | :heavy_check_mark:                                                                                                                             | Indicates if the transaction has been reverted                                                                                                 |                                                                                                                                                |
| `revertedAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `template`                                                                                                                                     | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Transaction template used                                                                                                                      |                                                                                                                                                |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `updatedAt`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |