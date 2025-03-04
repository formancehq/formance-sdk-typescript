# V3ListBankAccountsResponse

## Example Usage

```typescript
import { V3ListBankAccountsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListBankAccountsResponse = {
  contentType: "<value>",
  statusCode: 205,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3BankAccountsCursorResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2023-05-09T19:23:40.239Z"),
          id: "<id>",
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `v3BankAccountsCursorResponse`                                                                    | [shared.V3BankAccountsCursorResponse](../../../sdk/models/shared/v3bankaccountscursorresponse.md) | :heavy_minus_sign:                                                                                | OK                                                                                                |