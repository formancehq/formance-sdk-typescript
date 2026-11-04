# NumscriptInfo

## Example Usage

```typescript
import { NumscriptInfo } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: NumscriptInfo = {
  name: "<value>",
  version: "1.0.0",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `content`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The numscript source code                                                                     |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Creation/update timestamp (ISO 8601 format)                                                   |                                                                                               |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Ledger name this numscript belongs to                                                         |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the numscript                                                                         |                                                                                               |
| `version`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Semver version string (e.g. "1.0.0")                                                          | 1.0.0                                                                                         |