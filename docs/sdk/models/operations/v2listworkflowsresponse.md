# V2ListWorkflowsResponse

## Example Usage

```typescript
import { V2ListWorkflowsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListWorkflowsResponse = {
  contentType: "<value>",
  statusCode: 778346,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2ListWorkflowsResponse: {
    cursor: {
      data: [
        {
          config: {
            stages: [
              {
                "key": "<value>",
              },
            ],
          },
          createdAt: new Date("2022-08-04T10:54:08.318Z"),
          id: "<id>",
          updatedAt: new Date("2024-11-06T17:31:00.970Z"),
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

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `v2ListWorkflowsResponse`                                                               | [shared.V2ListWorkflowsResponse](../../../sdk/models/shared/v2listworkflowsresponse.md) | :heavy_minus_sign:                                                                      | List of workflows                                                                       |