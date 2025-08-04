# V3ListConnectorSchedulesResponse

## Example Usage

```typescript
import { V3ListConnectorSchedulesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListConnectorSchedulesResponse = {
  contentType: "<value>",
  statusCode: 80683,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v3ConnectorSchedulesCursorResponse`                                                                          | [shared.V3ConnectorSchedulesCursorResponse](../../../sdk/models/shared/v3connectorschedulescursorresponse.md) | :heavy_minus_sign:                                                                                            | OK                                                                                                            |