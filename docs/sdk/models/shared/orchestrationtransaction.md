# OrchestrationTransaction

## Example Usage

```typescript
import { OrchestrationTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationTransaction = {
  id: 822521n,
  metadata: {
    "admin": "true",
  },
  postings: [],
  reference: "ref:001",
  reverted: false,
  timestamp: new Date("2024-11-12T11:56:41.793Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"admin": "true"<br/>}                                                                   |
| `postings`                                                                                    | [shared.Posting](../../../sdk/models/shared/posting.md)[]                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | ref:001                                                                                       |
| `reverted`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |