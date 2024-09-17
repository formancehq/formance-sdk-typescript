# ConnectorsResponseData

## Example Usage

```typescript
import { Connector, ConnectorsResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorsResponseData = {
  connectorID: "<value>",
  name: "<value>",
  provider: Connector.Modulr,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connectorID`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `enabled`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `provider`                                                  | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | N/A                                                         |