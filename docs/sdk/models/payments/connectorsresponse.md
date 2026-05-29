# ConnectorsResponse

OK

## Example Usage

```typescript
import { Connector, ConnectorsResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorsResponse = {
  data: [
    {
      connector: Connector.Wise,
      connectorID: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [payments.ConnectorsResponseData](../../../sdk/models/payments/connectorsresponsedata.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |