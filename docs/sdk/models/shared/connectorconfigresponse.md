# ConnectorConfigResponse

OK

## Example Usage

```typescript
import { ConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorConfigResponse = {
  data: {
    directory: "/tmp/dummypay",
    filePollingPeriod: "60s",
    name: "My DummyPay Account",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `data`                   | *shared.ConnectorConfig* | :heavy_check_mark:       | N/A                      |