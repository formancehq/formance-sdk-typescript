# V3DummypayConfig

## Example Usage

```typescript
import { V3DummypayConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3DummypayConfig = {
  directory: "/var/mail",
  name: "<value>",
  provider: "Dummypay",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `directory`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `linkFlowError`                                                         | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Dummypay"*                                                            | :heavy_check_mark:                                                      | N/A                                                                     |
| `updateLinkFlowError`                                                   | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |