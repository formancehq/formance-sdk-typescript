# EvidenceUnion

For PASS/FAIL: the per-fingerprint roster. Each PASS entry carries a compact `proof`: the observed balances that make the check hold, with self-describing keys — both sides where two are compared, e.g. {"ledger":"523500","pool":"-523500"} (drift), {"left":…,"right":…} (source_parity), {"positive":…,"negative":…} (ledger_invariant), or {"balance":…} (account_threshold). These reuse the FAIL balance keys, so under tolerance the residual (left−right) is visible without recomputation. Each FAIL entry carries the full `evidence` breakdown (balances, drift, tolerance, compiled CEL). Bounded by asset count (per-asset granularity; per-account is parked). An empty array means no outcomes were produced (no assets matched). For ERROR: an object describing the engine failure.


## Supported Types

### `reconciliation.Evidence[]`

```typescript
const value: reconciliation.Evidence[] = [
  {},
];
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

