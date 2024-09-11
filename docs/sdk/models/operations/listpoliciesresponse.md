# ListPoliciesResponse

## Example Usage

```typescript
import { ListPoliciesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListPoliciesResponse = {
  contentType: "<value>",
  policiesCursorResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2021-01-01T00:00:00.000Z"),
          id: "XXX",
          ledgerName: "default",
          ledgerQuery: {
            "key": "<value>",
          },
          name: "XXX",
          paymentsPoolID: "XXX",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 230533,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `policiesCursorResponse`                                                              | [shared.PoliciesCursorResponse](../../../sdk/models/shared/policiescursorresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |