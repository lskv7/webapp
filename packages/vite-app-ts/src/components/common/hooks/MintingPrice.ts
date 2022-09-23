import { useContractReader } from 'eth-hooks';
import { useEthersContext } from 'eth-hooks/context';
import { BigNumber, utils } from 'ethers';

import { UserEntry } from '~~/components/pages/nft/NFTUI';
import { useAppContracts } from '~~/config/contractContext';
import { MysteryBoxToken } from '~~/generated/contract-types';

export const useMintingPrice = (discountEntry: UserEntry | undefined): BigNumber | undefined => {
  const ethersContext = useEthersContext();
  const mysteryBoxToken = useAppContracts('MysteryBoxToken', ethersContext.chainId) as MysteryBoxToken;
  const startingTime = useContractReader(mysteryBoxToken, mysteryBoxToken?.startingTime)[0];
  const duration = useContractReader(mysteryBoxToken, mysteryBoxToken?.duration)[0] as BigNumber;
  if (startingTime && '0' === startingTime.toString()) {
    let price = 0.2;
    if (discountEntry) {
      price *= 0.01 * (100 - discountEntry.discountRate);
    }
    return utils.parseEther(price.toString());
  }
  if (duration && startingTime) {
    const percentage = (Date.now() / 1000 - startingTime.toNumber()) / duration.toNumber();
    let price = 0.2 + 0.3 * percentage;
    if (discountEntry) {
      price *= 0.01 * (100 - discountEntry.discountRate);
    }
    return utils.parseEther(price.toString().substring(0, 19));
  }
  return undefined;
};
