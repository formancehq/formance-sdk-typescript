# V3GetConnectorCapabilitiesResponse

## Example Usage

```typescript
import { V3GetConnectorCapabilitiesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetConnectorCapabilitiesResponse = {
  contentType: "<value>",
  statusCode: 505813,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `v3ConnectorCapabilityResponse`                                                                         | [payments.V3ConnectorCapabilityResponse](../../../sdk/models/payments/v3connectorcapabilityresponse.md) | :heavy_minus_sign:                                                                                      | OK                                                                                                      |