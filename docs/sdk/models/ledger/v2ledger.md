# V2Ledger

A ledger and its configuration

## Example Usage

```typescript
import { V2Ledger } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2Ledger = {
  addedAt: new Date("2025-12-08T02:49:59.676Z"),
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
| `addedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the ledger was created                                                                   |                                                                                               |
| `bucket`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the storage bucket backing the ledger                                                 |                                                                                               |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the ledger was deleted, absent for active ledgers                                        |                                                                                               |
| `features`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Feature flags enabled on the ledger, keyed by feature name                                    |                                                                                               |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | Unique sequential identifier for the ledger                                                   |                                                                                               |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            | {<br/>"admin": "true"<br/>}                                                                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the ledger                                                                            |                                                                                               |