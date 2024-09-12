# V2ListInstancesResponse

## Example Usage

```typescript
import { V2ListInstancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListInstancesResponse = {
  contentType: "<value>",
  statusCode: 244425,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2ListRunsResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2023-11-15T08:48:35.382Z"),
          id: "<id>",
          terminated: false,
          updatedAt: new Date("2022-06-24T05:32:09.610Z"),
          workflowID: "<value>",
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