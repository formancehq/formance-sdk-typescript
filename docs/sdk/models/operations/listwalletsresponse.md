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
          createdAt: new Date("2024-10-31T18:13:30.324Z"),
          id: "bb258705-3202-4c73-95fe-9b90c28909b3",
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
  statusCode: 992397,
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