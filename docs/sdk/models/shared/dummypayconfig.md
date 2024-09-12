# DummyPayConfig

## Example Usage

```typescript
import { DummyPayConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: DummyPayConfig = {
  directory: "/tmp/dummypay",
  filePollingPeriod: "60s",
  name: "My DummyPay Account",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `directory`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | /tmp/dummypay                                                                                 |
| `filePollingPeriod`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The frequency at which the connector will try to fetch new payment objects from the directory | 60s                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | My DummyPay Account                                                                           |
| `numberOfAccountsPreGenerated`                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `numberOfPaymentsPreGenerated`                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `prefixFileToIngest`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |