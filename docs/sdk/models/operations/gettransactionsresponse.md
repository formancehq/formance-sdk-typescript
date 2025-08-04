# GetTransactionsResponse

## Example Usage

```typescript
import { GetTransactionsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetTransactionsResponse = {
  contentType: "<value>",
  statusCode: 518319,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `getTransactionsResponse`                                                               | [shared.GetTransactionsResponse](../../../sdk/models/shared/gettransactionsresponse.md) | :heavy_minus_sign:                                                                      | OK                                                                                      |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |