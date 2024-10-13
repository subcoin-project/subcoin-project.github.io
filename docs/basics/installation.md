---
sidebar_position: 1
---

# Installation

## Compile From Source

### Install Prerequisites

Subcoin is a Substrate-based chain, so you need to install the necessary development tools to compile the binary from source. Follow the full guide for installing the prerequisites at [Substrate Installation Guide](https://docs.substrate.io/install/).

### Clone and Build

The [subcoin-project/subcoin](https://github.com/subcoin-project/subcoin)'s main branch contains the latest Subcoin code. After installing the required packages and Rust, proceed to download the source code and compile the binary using the following command:

```bash
git clone https://github.com/subcoin-project/subcoin subcoin
cd subcoin
cargo build --profile production --bin subcoin
```

Once the compilation is complete, the Subcoin node executable subcoin will be located at `target/production/subcoin`.

#### Build with `rocksdb` enabled

By default, Subcoin is built with only the [paritydb](https://github.com/paritytech/parity-db) support for efficiency during local development, avoiding pulling in the `rocksdb` dependency. However, if you intend to perform a **full sync** from the genesis block rather than a fast sync, we recommend using `rocksdb` as it is generally more stable and performant, especially when the node approaches the tip of the Bitcoin chain.

To compile the binary with `rocksdb` support, use `--features rocksdb`:

```bash
cargo build --profile production --bin subcin --features rocksdb
```

## Docker

You can pull the Docker image built from the latest commit of the main branch with the following command:

```bash
docker pull ghcr.io/subcoin-project/subcoin:main
```

For a list of all available versions, refer to the [Subcoin Docker Container Versions](https://github.com/subcoin-project/subcoin/pkgs/container/subcoin/versions).

## Pre-built Binaries

Pre-built binaries are available for download from the [Subcoin Releases](https://github.com/subcoin-project/subcoin/releases) page on GitHub. Simply choose the appropriate binary for your operating system to get started quickly. If binaries are missing for your system, please [file an issue](https://github.com/subcoin-project/subcoin/issues/new) on the GitHub repository.
