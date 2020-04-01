import web3 from './web3';
const address = "0x011ac474288b0f7fdf749632a559c9fdf390a8dc";

const ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "VerifiedAddresses",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "companyName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_website",
				"type": "string"
			},
			{
				"name": "_companyName",
				"type": "string"
			}
		],
		"name": "addWebsite",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];


export default new web3.eth.Contract(ABI, address);