---
sidebar_position: 3
---

# Download UTXO Snapshot (Coming Soon)

Subcoin offers a dedicated tool for downloading a Bitcoin Core-compatible UTXO snapshot from the Subcoin P2P network directly. This eliminates the need for Bitcoin Core users to rely on trusted snapshot providers for performing a fast sync.

## Tool: `snapcake`

To download the UTXO snapshot, simply use the following command:

```bash
snapcake
```

## Using the Snapshot in Bitcoin Core

Once the snapshot is successfully downloaded, it can be loaded into your Bitcoin Core node using the `loadtxoutset` RPC command:

```bash
bitcoin-cli loadtxoutset <path-to-snapshot-file>
```

This process initializes your Bitcoin Core node with a recent UTXO set, allowing you to sync quickly to the network tip without the need to process historical blocks. This can significantly reduce the time required to get a fully functional bitcoind instance.
