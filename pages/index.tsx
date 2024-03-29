import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from './components/uis/navbar';
import {useState, useEffect} from 'react';
import  '../styles/mainbody.module.css';

import marketplaceAbi from './contract/marketplace.abi.json';
import { newKitFromWeb3 } from '@celo/contractkit';
import {BigNumber} from "bignumber.js";
import Web3 from 'web3';

const ERC20_DECIMALS = 18
const mydeployedcontractAddress = '0x9A1eaf5F9D227C8a71b16b3703ACb60aA6eAf544'

let contract
let produce




const products = [
  {
    id: 1,
    name: "Giant BBQ",
    image: "https://i.imgur.com/yPreV19.png",
    description: `Grilled chicken, beef, fish, sausages, bacon, 
      vegetables served with chips.`,
    location: "Kimironko Market",
    owner: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    price: 3,
    sold: 27,
    index: 0,
  },
  {
    id: 2,
    name: "BBQ Chicken",
    image: "https://i.imgur.com/NMEzoYb.png",
    description: `French fries and grilled chicken served with gacumbari 
      and avocados with cheese.`,
    location: "Afrika Fresh KG 541 St",
    owner: "0x3275B7F400cCdeBeDaf0D8A9a7C8C1aBE2d747Ea",
    price: 4,
    sold: 12,
    index: 1,
  },
  {
    id: 3,
    name: "Beef burrito",
    image: "https://i.imgur.com/RNlv3S6.png",
    description: `Homemade tortilla with your choice of filling, cheese, 
      guacamole salsa with Mexican refried beans and rice.`,
    location: "Asili - KN 4 St",
    owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
    price: 2,
    sold: 35,
    index: 2,
  },
  {
    id: 4,
    name: "Barbecue Pizza",
    image: "https://i.imgur.com/fpiDeFd.png",
    description: `Barbecue Chicken Pizza: Chicken, gouda, pineapple, onions 
      and house-made BBQ sauce.`,
    location: "Kigali Hut KG 7 Ave",
    owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
    price: 1,
    sold: 2,
    index: 3,
  },
]

const Home: NextPage = () => {
  const [produces, setProduces] = useState([])
  useEffect(() => {
      
  }, [])
  
  

  const web3 = new Web3("https://celo-alfajores.infura.io/v3/197cf23745d64339aea08f173a24eb76" );
  const contract = new web3.eth.Contract(marketplaceAbi, mydeployedcontractAddress)
  // const kit = newKitFromWeb3(web3);


  const postProducts = async function(name: any, image: any, _description: any, _location: any, price: any ){
    const accounts = await web3.eth.getAccounts()
    const requiredAccount = accounts[0]

  }
  const getProducts = async function() {
    const _productsLength = await contract.methods.getProductsLength().call()
    const _products = []

    //  I wanted to use for (let i = 0; i<_productsLength; )
  }
  return (
    <>
    
    <div className={styles.container}>
      {/* Header Section */}
      <Head >
        <title>YOGROSTORE</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.ico" rel="icon" />
        <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossOrigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
	
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"
    />
    
      </Head>
      
      {/* End of head */}
      
      <main className={styles.main}>
        {/* Navigation Bar */}
        <Navbar />
        <div className='main'></div>
        

       {/* End of Navigation Bar */}
       
       
      <div>
       
        {/* <h1>Products</h1> */}
        <div className={styles.wrappergrid}>
          
         {products.map(product =>(
          <div key={product.id} className={styles.wrappercontainer}>
            <h2>{product.name}</h2>
            
            <img src={product.image } alt={product.name} />
            <p>{product.description}</p>
            <button className={styles.btnbuy} role='button'> Buy at {product.price} USD with EVM Token</button>

          </div>
         ))}
        </div>
       </div>
  
      </main>

      <footer className={styles.footer}>
        <a href="#" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at Yogrostore
        </a>
      </footer>
    </div>
    </>
  );
};

export default Home;
