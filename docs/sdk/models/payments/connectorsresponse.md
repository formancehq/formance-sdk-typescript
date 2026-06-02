# ConnectorsResponse

OK

## Example Usage

```typescript
import { Connector, ConnectorsResponse } from "@formance/formance-sdk/sdk/models/payments";

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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [payments.ConnectorsResponseData](../../../sdk/models/payments/connectorsresponsedata.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |