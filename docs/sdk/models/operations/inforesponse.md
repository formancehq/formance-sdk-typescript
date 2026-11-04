# InfoResponse

## Example Usage

```typescript
import { InfoResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: InfoResponse = {
  contentType: "<value>",
  statusCode: 318360,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `serverInfo`                                                          | [ledgerV3.ServerInfo](../../../sdk/models/ledgerV3/serverinfo.md)     | :heavy_minus_sign:                                                    | Server build information                                              |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |