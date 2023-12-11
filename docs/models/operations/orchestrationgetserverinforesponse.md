# OrchestrationgetServerInfoResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `error`                                                 | [shared.ErrorT](../../models/shared/errort.md)          | :heavy_minus_sign:                                      | General error                                           |
| `serverInfo`                                            | [shared.ServerInfo](../../models/shared/serverinfo.md)  | :heavy_minus_sign:                                      | Server information                                      |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |