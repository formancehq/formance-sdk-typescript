# AccountVolume

## Example Usage

```typescript
import { AccountVolume } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AccountVolume = {
  asset: "<value>",
  color: "green",
  volumes: {
    balance: "<value>",
    input: "<value>",
    output: 361061n,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `asset`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Asset identifier (e.g. "USD/2")                                                   |
| `color`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Color of the bucket. Empty string is the uncolored bucket.                        |
| `volumes`                                                                         | [ledgerV3.VolumesWithBalance](../../../sdk/models/ledgerV3/volumeswithbalance.md) | :heavy_check_mark:                                                                | N/A                                                                               |