# V3Connector

## Example Usage

```typescript
import { V3Connector } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Connector = {
  config: {},
  createdAt: new Date("2025-04-23T06:32:34.973Z"),
  id: "<id>",
  name: "<value>",
  provider: "<value>",
  reference: "<value>",
  scheduledForDeletion: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `capabilities`                                                                                | [payments.V3Capability](../../../sdk/models/payments/v3capability.md)[]                       | :heavy_minus_sign:                                                                            | Plugin capabilities advertised by the connector's provider.                                   |
| `config`                                                                                      | [payments.Config](../../../sdk/models/payments/config.md)                                     | :heavy_check_mark:                                                                            | The connector's configuration, whose shape depends on the provider                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the connector was installed                                                              |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the connector                                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of the connector instance                                                 |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the payment provider behind the connector                                             |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Stable reference identifying the connector                                                    |
| `scheduledForDeletion`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the connector is being uninstalled                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the connector's configuration was last changed                                           |