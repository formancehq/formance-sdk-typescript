# V2BulkElementResultAddMetadata

## Example Usage

```typescript
import { V2BulkElementResultAddMetadata } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementResultAddMetadata = {
  logID: 934456,
  responseType: "ADD_METADATA",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `logID`                                              | *number*                                             | :heavy_check_mark:                                   | Identifier of the log entry produced by this element |
| `responseType`                                       | *"ADD_METADATA"*                                     | :heavy_check_mark:                                   | The action this result corresponds to                |