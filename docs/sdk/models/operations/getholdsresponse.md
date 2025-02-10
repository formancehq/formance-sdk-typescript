# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetHoldsResponse = {
  contentType: "<value>",
  getHoldsResponse: {
    cursor: {
      data: [
        {
          description:
            "aw opposite pfft same willfully sadly phew er solidly doing",
          id: "dfc81773-6527-4480-9ed8-df1aff92903f",
          metadata: {
            "key": "<value>",
          },
          walletID: "<id>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 408,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `getHoldsResponse`                                                        | [shared.GetHoldsResponse](../../../sdk/models/shared/getholdsresponse.md) | :heavy_minus_sign:                                                        | Holds                                                                     |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |