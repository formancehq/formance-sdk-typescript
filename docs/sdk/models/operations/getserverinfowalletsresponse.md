# GetServerInfoWalletsResponse

## Example Usage

```typescript
import { GetServerInfoWalletsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetServerInfoWalletsResponse = {
  contentType: "<value>",
  statusCode: 844042,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `serverInfo`                                                          | [wallets.ServerInfo](../../../sdk/models/wallets/serverinfo.md)       | :heavy_minus_sign:                                                    | Server information                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |