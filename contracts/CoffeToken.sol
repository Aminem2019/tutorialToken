pragma solidity >=0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract CoffeToken is ERC20 {
	string public name = "CoffeToken";
	string public symbol = "CTK";
	uint8 public decimals = 2;
	uint public INITIAL_SUPPLY = 100000; // this is represent 1000 matic/eth

	constructor() public {
		  _mint(msg.sender, INITIAL_SUPPLY);
	}
}

