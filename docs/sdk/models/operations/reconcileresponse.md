# ReconcileResponse

## Example Usage

```typescript
import { ReconcileResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReconcileResponse = {
  contentType: "<value>",
  statusCode: 775153,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `reconciliationResponse`                                                              | [shared.ReconciliationResponse](../../../sdk/models/shared/reconciliationresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |