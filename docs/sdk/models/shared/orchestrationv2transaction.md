# OrchestrationV2Transaction

## Example Usage

```typescript
import { OrchestrationV2Transaction } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationV2Transaction = {
  metadata: {
    "admin": "true",
  },
  postings: [],
  reference: "ref:001",
  timestamp: new Date("2024-06-22T20:49:25.112Z"),
  txid: 422477n,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"admin": "true"<br/>}                                                                   |
| `postings`                                                                                    | [shared.V2Posting](../../../sdk/models/shared/v2posting.md)[]                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | ref:001                                                                                       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `txid`                                                                                        | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |