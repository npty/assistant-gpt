You need to pay gas to the `gasService` every time you call `callContractWithToken` or `callContractWithToken` to the gateway contract.

Please note that you cannot use msg.value if you are calling `callContractWithToken` from the destination chain because the transaction will be made by the Axelar Relayer.

In this case, you need to use `payGasForContractCallWithToken` instead.

```solidity
  function payGasForContractCallWithToken(
    address sender,
    string calldata destinationChain,
    string calldata destinationAddress,
    bytes calldata payload,
    string calldata tokenSymbol,
    uint256 tokenAmount,
    address gasToken,
    uint256 gasFeeAmount,
    address refundAddress
  ) external;
```

or `payGasForContractCall`

```solidity
  function payGasForContractCall(
    address sender,
    string calldata destinationChain,
    string calldata destinationAddress,
    bytes calldata payload,
    address gasToken,
    uint256 gasFeeAmount,
    address refundAddress
  ) external;
```

Available chains: `["ethereum-2", "avalanche", "polygon", "moonbeam", "fantom"]`

Available symbols: `["aUSDC"]`

Available Axelar Gateway Addresses:

```json
{
  "ethereum-2": "0xe432150cce91c13a887f7D836923d5597adD8E31",
  "avalanche": "0xC249632c2D40b9001FE907806902f63038B737Ab",
  "polygon": "0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B",
  "moonbeam": "0x5769D84DD62a6fD969856c75c7D321b84d455929",
  "fantom": "0x97837985Ec0494E7b9C71f5D3f9250188477ae14"
}
```

Available Axelar Gas Service Addresses:

```json
{
  "ethereum-2": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  "avalanche": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  "polygon": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  "moonbeam": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  "fantom": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
}
```
