# V2Ledger

## Example Usage

```typescript
import { V2Ledger } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Ledger = {
  addedAt: new Date("2025-11-16T00:59:56.580Z"),
  bucket: "<value>",
  metadata: {
    "admin": "true",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `addedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `bucket`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"admin": "true"<br/>}                                                                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |