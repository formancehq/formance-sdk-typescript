# GetPolicyResponse

## Example Usage

```typescript
import { GetPolicyResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetPolicyResponse = {
  contentType: "<value>",
  policyResponse: {
    data: {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      id: "XXX",
      ledgerName: "default",
      ledgerQuery: {
        "key": "<value>",
      },
      name: "XXX",
      paymentsPoolID: "XXX",
    },
  },
  statusCode: 506,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `policyResponse`                                                      | [shared.PolicyResponse](../../../sdk/models/shared/policyresponse.md) | :heavy_minus_sign:                                                    | OK                                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |