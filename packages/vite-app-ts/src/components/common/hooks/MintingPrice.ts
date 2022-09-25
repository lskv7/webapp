import { useContractReader } from 'eth-hooks';
import { useEthersContext } from 'eth-hooks/context';
import { BigNumber, utils } from 'ethers';
import { useEffect, useState } from 'react';

import { UserEntry } from '~~/components/pages/nft/NFTUI';
import { useAppContracts } from '~~/config/contractContext';
import { MysteryBoxToken } from '~~/generated/contract-types';

export const useMintingPrice = (discountEntry: UserEntry | undefined): BigNumber | undefined => {
  const ethersContext = useEthersContext();
  const mysteryBoxToken = useAppContracts('MysteryBoxToken', ethersContext.chainId) as MysteryBoxToken;
  const startingTime = useContractReader(mysteryBoxToken, mysteryBoxToken?.startingTime)[0];
  const claimed = useContractReader(mysteryBoxToken, mysteryBoxToken?.discountClaimed, [
    discountEntry?.address as string,
  ])[0];
  const duration = useContractReader(mysteryBoxToken, mysteryBoxToken?.duration)[0] as BigNumber;
  const [bnPrice, setBnPrice] = useState<BigNumber>();

  useEffect(() => {
    console.log('updating');
    let price = 0.2;
    if (startingTime && '0' === startingTime.toString()) {
      if (discountEntry && !claimed && discountEntry && discountEntry.discountRate) {
        price *= 0.01 * (100 - discountEntry.discountRate);
      }
      setBnPrice(utils.parseEther(price.toString()));
    }
    if (duration && startingTime) {
      const percentage = (Date.now() / 1000 - startingTime.toNumber()) / duration.toNumber();
      price += 0.3 * percentage;
      if (discountEntry && !claimed && discountEntry && discountEntry.discountRate) {
        price *= 0.01 * (100 - discountEntry.discountRate);
      }
      setBnPrice(utils.parseEther(price.toString().substring(0, 19)));
    }
  }, [claimed, duration, startingTime, mysteryBoxToken]);

  return bnPrice;
};
