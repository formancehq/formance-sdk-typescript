# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListWalletsResponse = {
  contentType: "<value>",
  listWalletsResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2023-01-19T14:12:42.332Z"),
          id: "442825ab-06ad-47f4-8074-d34cb8b60081",
          ledger: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 510,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `listWalletsResponse`                                                           | [shared.ListWalletsResponse](../../../sdk/models/shared/listwalletsresponse.md) | :heavy_minus_sign:                                                              | OK                                                                              |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |