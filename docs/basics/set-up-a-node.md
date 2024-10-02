---
sidebar_position: 2
---

# Set up a Full Node

This guide will show you show to connect to Bitcoin network with Subcoin.

## Types of Nodes

- **Archive Node**: An archive node keeps all the past blocks and their states. An archive node makes it convenient to query the past state of the chain at any point in time. However, an archive node takes up a lot of disk space - serverl TBs. Archive nodes are used by utilities that need the on-chain information- like block explorers.
- **Full Node**: A full node prunes historical states, all finalized blocks' states older than a configurable number except the genesis block's state will be pruned. This is 256 blocks from the last finalized one by default. A pruned node this way requires much less space than an archive node.

## Hardware Requirements

TODO

## Syncing the Bitcoin Network

There are two strategies to sync the Bitcoin network for new nodes: Full Sync and Fast Sync.

- Full Sync: This will download blocks directly from Bitcoin P2P network using the Subcoin networking. This approach is only necessary for establishing the Subcoin bootnodes when the Subcoin P2P network starts. For the regular users, Fast Sync is usually recommended. This process is time-consuming, can take days to complete depending on your machine.
- Fast Sync: This will download the latest recent Bitcoin state from Subcoin P2P network and then continue with the normal Full Sync, with the block history downloaded in the background.

### Full Sync

Run the following command to sync the Bitcoin blockchain from the Bitcoin P2P network. The `--log subcoin_network=debug` option
will enable debug-level logging to show detailed information about the syncing process. By default, the block will be fully verified.
You can use `--block-verification=none` to skip the block verification. Check out `subcoin run --help` for more options.

```bash
subcoin run -d data --log subcoin_network=debug
```

### Fast Sync
