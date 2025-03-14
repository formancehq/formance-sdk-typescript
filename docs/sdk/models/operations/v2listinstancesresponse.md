# V2ListInstancesResponse

## Example Usage

```typescript
import { V2ListInstancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListInstancesResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2ListRunsResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2023-04-09T04:55:05.565Z"),
          id: "<id>",
          terminated: false,
          updatedAt: new Date("2025-01-06T13:32:43.889Z"),
          workflowID: "<id>",
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

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |
| `v2ListRunsResponse`                                                          | [shared.V2ListRunsResponse](../../../sdk/models/shared/v2listrunsresponse.md) | :heavy_minus_sign:                                                            | List of workflow instances                                                    |