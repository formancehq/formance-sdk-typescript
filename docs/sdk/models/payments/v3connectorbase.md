# V3ConnectorBase

Summary of a connector, without its configuration

## Example Usage

```typescript
import { V3ConnectorBase } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConnectorBase = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the connector was installed                                                              |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier of the connector                                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable name of the connector instance                                                 |
| `provider`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the payment provider behind the connector                                             |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Stable reference identifying the connector                                                    |