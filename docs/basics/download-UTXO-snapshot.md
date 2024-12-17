---
sidebar_position: 3
---

# Download UTXO Snapshot

Subcoin offers a dedicated tool `snapcake` for downloading a Bitcoin Core-compatible UTXO snapshot from the Subcoin P2P network directly. This eliminates the need for Bitcoin Core users to rely on trusted snapshot providers for performing a fast sync.

## Command to Download a UTXO Snapshot

To download the UTXO snapshot for a specified block, simply use the following command:

```bash
snapcake --bootnodes <BOOTNODES> --block-number 840000
```

### Notes

- Supported Block:

  While snapcake supports downloading the snapshot at any block as long as the peer does not prune the state, only the UTXO snapshot at hardcoded block height 840000 is currently supported for importing into Bitcoin Core.

- Snapshot integrity:

The expected `sha256sum` for the snapshot at block 840000 is:

```text
dc4bb43d58d6a25e91eae93eb052d72e3318bd98ec62a5d0c11817cefbba177b
```
This checksum matches the one documented in the official [Bitcoin Core pull request](https://github.com/bitcoin/bitcoin/pull/28553#issue-1920247340).

## Verify the Downloaded Snapshot

To ensure the integrity of the downloaded snapshot, verify its checksum using the `sha256sum` command:

```bash
# Replace <path-to-snapshot-file> with the path to your downloaded snapshot.
# By default, the file is stored at:
# snapshots/840000_0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5/snapshot.dat
sha256sum <path-to-snapshot-file>
```

The output should match the expected checksum:

```text
dc4bb43d58d6a25e91eae93eb052d72e3318bd98ec62a5d0c11817cefbba177b
```

## Using the Snapshot in Bitcoin Core

Once the snapshot is successfully downloaded, it can be loaded into your Bitcoin Core node using the `loadtxoutset` RPC command:

```bash
bitcoin-cli loadtxoutset <path-to-snapshot-file>
```

This process initializes your Bitcoin Core node with a recent UTXO set, allowing you to sync quickly to the network tip without the need to process historical blocks. This can significantly reduce the time required to get a fully functional bitcoind instance.
