# LivezResponse

## Example Usage

```typescript
import { LivezResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: LivezResponse = {
  contentType: "<value>",
  statusCode: 251063,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `healthResponse`                                                          | [ledgerV3.HealthResponse](../../../sdk/models/ledgerV3/healthresponse.md) | :heavy_minus_sign:                                                        | Process is alive                                                          |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |