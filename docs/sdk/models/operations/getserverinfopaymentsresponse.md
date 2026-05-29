# GetServerInfoPaymentsResponse

## Example Usage

```typescript
import { GetServerInfoPaymentsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetServerInfoPaymentsResponse = {
  contentType: "<value>",
  statusCode: 174905,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `serverInfo`                                                          | [payments.ServerInfo](../../../sdk/models/payments/serverinfo.md)     | :heavy_minus_sign:                                                    | Server information                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |