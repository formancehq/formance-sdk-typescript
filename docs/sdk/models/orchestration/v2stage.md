# V2Stage


## Supported Types

### `orchestration.V2StageSend`

```typescript
const value: orchestration.V2StageSend = {
  destination: {
    account: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
    payment: {
      psp: "stripe",
      type: "PAYOUT",
    },
  },
  source: {
    account: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
};
```

### `orchestration.V2StageDelay`

```typescript
const value: orchestration.V2StageDelay = {};
```

### `orchestration.V2StageWaitEvent`

```typescript
const value: orchestration.V2StageWaitEvent = {
  event: "<value>",
};
```

### `orchestration.V2Update`

```typescript
const value: orchestration.V2Update = {};
```

