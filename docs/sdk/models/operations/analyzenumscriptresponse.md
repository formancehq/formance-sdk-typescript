# AnalyzeNumscriptResponse

## Example Usage

```typescript
import { AnalyzeNumscriptResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: AnalyzeNumscriptResponse = {
  contentType: "<value>",
  statusCode: 105857,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `analyzeNumscriptResponse`                                                                    | [ledgerV3.AnalyzeNumscriptResponse](../../../sdk/models/ledgerV3/analyzenumscriptresponse.md) | :heavy_minus_sign:                                                                            | Analysis result                                                                               |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `errorResponse`                                                                               | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)                       | :heavy_minus_sign:                                                                            | Bad request                                                                                   |
| `forbidden`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Insufficient permissions (missing required scope)                                             |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `unauthorized`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Authentication required (missing or invalid JWT token)                                        |