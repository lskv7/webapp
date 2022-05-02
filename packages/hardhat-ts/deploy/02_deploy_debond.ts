import { ethers } from 'hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const DBIT = await ethers.getContract('DBIT', deployer);
  const USDC = await ethers.getContract('USDC', deployer);
  const USDT = await ethers.getContract('USDT', deployer);
  const DAI = await ethers.getContract('DAI', deployer);

  const DeBond = await deploy('DebondBond', {
    from: deployer,
    log: true,
    args: [DBIT.address, USDC.address, USDT.address, DAI.address],
  });

  const DebondData = await deploy('DebondData', {
    from: deployer,
    args: [DBIT.address, USDC.address, USDT.address, DAI.address],
    log: true,
  });

  const APM = await deploy('APM', {
    from: deployer,
    log: true,
    args: [USDC.address, DBIT.address],
  });

  const Bank = await deploy('Bank', {
    from: deployer,
    args: [APM.address, DebondData.address, DeBond.address],
    log: true,
  });
};
export default func;
func.tags = ['DBIT'];
