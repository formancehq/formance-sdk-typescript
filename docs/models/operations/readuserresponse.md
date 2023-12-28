# ReadUserResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | HTTP response content type for this operation                      |
| `readUserResponse`                                                 | [shared.ReadUserResponse](../../models/shared/readuserresponse.md) | :heavy_minus_sign:                                                 | Retrieved user                                                     |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | HTTP response status code for this operation                       |
| `rawResponse`                                                      | [AxiosResponse](https://axios-http.com/docs/res_schema)            | :heavy_minus_sign:                                                 | Raw HTTP response; suitable for custom response parsing            |