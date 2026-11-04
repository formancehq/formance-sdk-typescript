# SetDefaultEnforcementModeRequest

## Example Usage

```typescript
import { SetDefaultEnforcementModeRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: SetDefaultEnforcementModeRequest = {
  setDefaultEnforcementModeRequest: {
    enforcementMode: "AUDIT",
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `setDefaultEnforcementModeRequest`                                                                            | [ledgerV3.SetDefaultEnforcementModeRequest](../../../sdk/models/ledgerV3/setdefaultenforcementmoderequest.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `ledgerName`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Name of the ledger                                                                                            |