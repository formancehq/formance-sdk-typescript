# V3InstallConnectorResponse

## Example Usage

```typescript
import { V3InstallConnectorResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3InstallConnectorResponse = {
  contentType: "<value>",
  statusCode: 944262,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `v3InstallConnectorResponse`                                                                  | [shared.V3InstallConnectorResponse](../../../sdk/models/shared/v3installconnectorresponse.md) | :heavy_minus_sign:                                                                            | Accepted                                                                                      |