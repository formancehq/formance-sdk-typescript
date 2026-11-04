# GetConnectorFacetsResponse

## Example Usage

```typescript
import { GetConnectorFacetsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetConnectorFacetsResponse = {
  contentType: "<value>",
  statusCode: 654038,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `error`                                                                                 | [connectivity.ErrorT](../../../sdk/models/connectivity/errort.md)                       | :heavy_minus_sign:                                                                      | Request or server error. The HTTP status and code identify the failure.                 |
| `facetDistribution`                                                                     | [connectivity.FacetDistribution](../../../sdk/models/connectivity/facetdistribution.md) | :heavy_minus_sign:                                                                      | OK                                                                                      |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |