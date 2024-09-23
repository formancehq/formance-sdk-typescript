# V2ListTriggersResponse

## Example Usage

```typescript
import { V2ListTriggersResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListTriggersResponse = {
  contentType: "<value>",
  statusCode: 872651,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2ListTriggersResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2022-10-27T19:14:58.861Z"),
          event: "<value>",
          id: "<id>",
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `v2ListTriggersResponse`                                                              | [shared.V2ListTriggersResponse](../../../sdk/models/shared/v2listtriggersresponse.md) | :heavy_minus_sign:                                                                    | List of triggers                                                                      |