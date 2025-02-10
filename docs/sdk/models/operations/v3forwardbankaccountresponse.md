# V3ForwardBankAccountResponse

## Example Usage

```typescript
import { V3ForwardBankAccountResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ForwardBankAccountResponse = {
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `v3ForwardBankAccountResponse`                                                                    | [shared.V3ForwardBankAccountResponse](../../../sdk/models/shared/v3forwardbankaccountresponse.md) | :heavy_minus_sign:                                                                                | Accepted                                                                                          |