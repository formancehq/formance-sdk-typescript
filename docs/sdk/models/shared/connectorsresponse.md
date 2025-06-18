# ConnectorsResponse

OK

## Example Usage

```typescript
import { Connector, ConnectorsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorsResponse = {
  data: [
    {
      connectorID: "<id>",
      name: "<value>",
      provider: Connector.Wise,
    },
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [shared.ConnectorsResponseData](../../../sdk/models/shared/connectorsresponsedata.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |