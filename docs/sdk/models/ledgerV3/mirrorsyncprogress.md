# MirrorSyncProgress

Sync progress for MIRROR ledgers (populated at read time)

## Example Usage

```typescript
import { MirrorSyncProgress } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MirrorSyncProgress = {
  cursor: 645147n,
  remainingLogs: 930919n,
  sourceLogCount: 816402n,
  state: "SYNCING",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *BigInt*                                                                    | :heavy_check_mark:                                                          | Last ingested v2 log ID                                                     |
| `error`                                                                     | [ledgerV3.MirrorSyncError](../../../sdk/models/ledgerV3/mirrorsyncerror.md) | :heavy_minus_sign:                                                          | Most recent mirror sync error (null if healthy)                             |
| `remainingLogs`                                                             | *BigInt*                                                                    | :heavy_check_mark:                                                          | Number of remaining logs to sync (sourceLogCount - cursor)                  |
| `sourceLogCount`                                                            | *BigInt*                                                                    | :heavy_check_mark:                                                          | Latest known log ID in the v2 source                                        |
| `state`                                                                     | [ledgerV3.State](../../../sdk/models/ledgerV3/state.md)                     | :heavy_check_mark:                                                          | Current sync state (SYNCING = catching up, FOLLOWING = up to date)          |