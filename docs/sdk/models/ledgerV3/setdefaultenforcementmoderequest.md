# SetDefaultEnforcementModeRequest

## Example Usage

```typescript
import { SetDefaultEnforcementModeRequest } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SetDefaultEnforcementModeRequest = {
  enforcementMode: "AUDIT",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `enforcementMode`                                                           | [ledgerV3.EnforcementMode](../../../sdk/models/ledgerV3/enforcementmode.md) | :heavy_check_mark:                                                          | Default enforcement mode for accounts not matching any account type         |