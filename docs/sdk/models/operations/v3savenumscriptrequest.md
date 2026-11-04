# V3SaveNumscriptRequest

## Example Usage

```typescript
import { V3SaveNumscriptRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3SaveNumscriptRequest = {
  saveNumscriptRequest: {
    content: "<value>",
    version: "1.0.0",
  },
  ledgerName: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `saveNumscriptRequest`                                                                | [ledgerV3.SaveNumscriptRequest](../../../sdk/models/ledgerV3/savenumscriptrequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `ledgerName`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | Name of the ledger                                                                    |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Name of the numscript, URL-encoded as one path segment. Decoded exactly once.         |