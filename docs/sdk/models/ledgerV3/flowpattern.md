# FlowPattern

## Example Usage

```typescript
import { FlowPattern } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: FlowPattern = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `metadataKeys`                                                                    | *string*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |
| `postings`                                                                        | [ledgerV3.NormalizedPosting](../../../sdk/models/ledgerV3/normalizedposting.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `signature`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Canonical flow signature (e.g. "users:{id}:main->bank:fees[USD]")                 |
| `structure`                                                                       | [ledgerV3.Structure](../../../sdk/models/ledgerV3/structure.md)                   | :heavy_minus_sign:                                                                | N/A                                                                               |
| `temporal`                                                                        | [ledgerV3.TemporalStats](../../../sdk/models/ledgerV3/temporalstats.md)           | :heavy_minus_sign:                                                                | N/A                                                                               |
| `transactionCount`                                                                | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `volumeStats`                                                                     | [ledgerV3.AssetVolumeStats](../../../sdk/models/ledgerV3/assetvolumestats.md)[]   | :heavy_minus_sign:                                                                | N/A                                                                               |