# V2Stage


## Supported Types

### `orchestration.V2StageSend`

```typescript
const value: orchestration.V2StageSend = {
  v2StageSendDestination: {
    v2StageSendDestinationPayment: {
      psp: "stripe",
      type: V2StageSendDestinationPaymentType.Payout,
    },
    v2StageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
  v2StageSendSource: {
    v2StageSendSourceAccount: {
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

