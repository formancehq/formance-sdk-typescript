# V2BulkElementResultError

## Example Usage

```typescript
import { V2BulkElementResultError } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementResultError = {
  errorCode: "<value>",
  errorDescription: "<value>",
  logID: 332853,
  responseType: "ERROR",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `errorCode`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `errorDescription`                                   | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `errorDetails`                                       | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `logID`                                              | *number*                                             | :heavy_check_mark:                                   | Identifier of the log entry produced by this element |
| `responseType`                                       | *"ERROR"*                                            | :heavy_check_mark:                                   | The action this result corresponds to                |