# V2UpdateLedgerMetadataResponse

## Example Usage

```typescript
import { V2UpdateLedgerMetadataResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V2UpdateLedgerMetadataResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2ErrorResponse: {
    details:
      "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
    errorCode: V2ErrorsEnum.Validation,
    errorMessage: "[VALIDATION] invalid 'cursor' query param",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `v2ErrorResponse`                                                       | [shared.V2ErrorResponse](../../../sdk/models/shared/v2errorresponse.md) | :heavy_minus_sign:                                                      | Error                                                                   |