# ConnectorsResponse

## Example Usage

```typescript
import { Connector, ConnectorsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorsResponse = {
    data: [
        {
            connectorID: "<value>",
            name: "<value>",
            provider: Connector.Atlar,
        },
    ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [shared.ConnectorsResponseData](../../../sdk/models/shared/connectorsresponsedata.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |