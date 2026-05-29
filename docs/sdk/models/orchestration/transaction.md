# Transaction

## Example Usage

```typescript
import { Transaction } from "@formance/formance-sdk/sdk/models/orchestration";

let value: Transaction = {
  metadata: {
    "admin": "true",
  },
  id: 265587n,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"admin": "true"<br/>}                                                                   |
| `id`                                                                                          | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `postings`                                                                                    | [orchestration.Posting](../../../sdk/models/orchestration/posting.md)[]                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | ref:001                                                                                       |
| `reverted`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |