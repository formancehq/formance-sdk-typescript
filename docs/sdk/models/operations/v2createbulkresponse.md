# V2CreateBulkResponse

## Example Usage

```typescript
import { V2CreateBulkResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V2CreateBulkResponse = {
  contentType: "<value>",
  statusCode: 431,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2BulkResponse: {
    data: [
      {
        errorCode: "<value>",
        errorDescription: "<value>",
        logID: 359508,
        responseType: "<value>",
      },
    ],
    details:
      "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
    errorCode: V2ErrorsEnum.Validation,
    errorMessage: "[VALIDATION] invalid 'cursor' query param",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `v2BulkResponse`                                                      | [shared.V2BulkResponse](../../../sdk/models/shared/v2bulkresponse.md) | :heavy_minus_sign:                                                    | OK                                                                    |