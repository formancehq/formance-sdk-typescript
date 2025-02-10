# ListAccountsResponse

## Example Usage

```typescript
import { ListAccountsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: ListAccountsResponse = {
  accountsCursorResponse: {
    cursor: {
      data: [
        {
          address: "users:001",
          metadata: {
            "admin": true,
            "a": {
              "nested": {
                "key": "value",
              },
            },
          },
          type: "virtual",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  errorResponse: {
    details:
      "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
    errorCode: ErrorsEnum.InsufficientFund,
    errorMessage: "[INSUFFICIENT_FUND] account had insufficient funds",
  },
  statusCode: 402,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `accountsCursorResponse`                                                              | [shared.AccountsCursorResponse](../../../sdk/models/shared/accountscursorresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `errorResponse`                                                                       | [shared.ErrorResponse](../../../sdk/models/shared/errorresponse.md)                   | :heavy_minus_sign:                                                                    | Not found                                                                             |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |