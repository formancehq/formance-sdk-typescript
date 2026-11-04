# NumscriptVersionEntry

## Example Usage

```typescript
import { NumscriptVersionEntry } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: NumscriptVersionEntry = {
  version: "1.0.0",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When this version was stored (ISO 8601 format)                                                |                                                                                               |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Stored semver version string (e.g. "1.0.0")                                                   | 1.0.0                                                                                         |