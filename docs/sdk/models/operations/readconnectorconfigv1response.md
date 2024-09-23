# ReadConnectorConfigV1Response

## Example Usage

```typescript
import { ReadConnectorConfigV1Response } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadConnectorConfigV1Response = {
  connectorConfigResponse: {
    data: {
      apiKey: "XXX",
      clientID: "XXX",
      endpoint: "XXX",
      name: "My MangoPay Account",
      pollingPeriod: "60s",
    },
  },
  contentType: "<value>",
  statusCode: 240020,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `connectorConfigResponse`                                                               | [shared.ConnectorConfigResponse](../../../sdk/models/shared/connectorconfigresponse.md) | :heavy_minus_sign:                                                                      | OK                                                                                      |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |