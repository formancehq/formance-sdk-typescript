# CreateTransactionResponse

## Example Usage

```typescript
import { CreateTransactionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateTransactionResponse = {
  contentType: "<value>",
  statusCode: 272656,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transactionsResponse: {
    data: [],
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `transactionsResponse`                                                            | [shared.TransactionsResponse](../../../sdk/models/shared/transactionsresponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |