# ConnectorVersionSummary

## Example Usage

```typescript
import { ConnectorVersionSummary } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectorVersionSummary = {
  version: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `digest`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Image digest pinning this version immutably, when known                                       |
| `releaseDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Version tag (e.g. `v1.4.2`)                                                                   |