import browser_pic from "../images/browser-wallet-screen.png"
import eth_logo from "../images/ethereum-logo-transp.png"
import btn_send_email from "../icons/button-send-email.svg"

export default function Landing(props) {
    return (
        <>
            <div id="body-container" class="md:max-w-6xl md:mx-auto grid grid-flow-rows gap-80 px-15 pb-80 pt-150
            md:gap-70 md:px-20 md:pb-70 md:pt-120">
                <div id="header" class="grid grid-flow-row gap-40 justify-items-center">
                    <h1 class="text-center">A crypto wallet you'll <span class="text-selected">love</span></h1>
        
                    <p class="text-center w-4/5">
                        Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on the Solana
                        blockchain
                    </p>
        
                    <button
                        class="add-wallet-btn bg-btn-primary rounded-full md:hidden self-start md:block text-primary mx-auto"
                        type="button">
                        <p class="text-primary text-center font-bold">Download</p>
                    </button>
        
                    <button class="add-wallet-btn bg-btn-primary rounded-full hidden self-start md:block text-primary mx-auto"
                        type="button">
                        <p class="text-btn font-btn text-primary text-center">Add to Chrome</p>
                    </button>
                </div>
        
                <div class="hidden md:grid grid-cols-2 gap-40 py-40 pr-10 items-center rounded-md bg-gradient-purple-1">
        
                    <div class="float-right">
                        <img src={ browser_pic } alt="" />
                    </div>
        
                    <div class="grid grid-flox-rows gap-40">
                        <h1 class="self-end">Turn your browser into a crypto wallet</h1>
                        <p class="self-start">Phantom unlocks a simple and secure way tointeract with blockchain-based
                            applications directly from your favorite web browser.</p>
                    </div>
                </div>
        
                <div class="flex justify-center flex-wrap flex-row py-20 py-60 mb-20 rounded-md items-center 
                bg-gradient-purple-1 md:hidden">
                    <h2 class="text-center mb-40 block px-20">Turn your browser into a crypto wallet</h2>
        
                    <div class="float-right mb-40 pr-20">
                        <img src={ browser_pic } alt="" />
                    </div>
                    <p class="px-20">Phantom unlocks a simple and secure way tointeract with blockchain-based applications
                        directly from
                        your favorite web browser.</p>
                </div>
        
                <div class="grid grid-flow-rows gap-40">
                    <h1 class="text-center">All the features you want</h1>
                    <p class="text-center">Phantom has everything you need to traverse the Solana ecosystem</p>
        
                    <div class="grid md:grid-cols-3 gap-40 md:grid-rows-2">
                        <div class="feature-text-block flex flex-col justify-center">
                            <h3 class="mb-20">Non-custodial</h3>
                            <p class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md">We never have access to any of your
                                data and fund. Ever.</p>
                        </div>
                        <div class="feature-text-block flex flex-col justify-center">
                            <h3 class="mb-20">Token Swaps</h3>
                            <p class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md">Use our built-in DEX to safely swap
                                tokens at the best prices, instantly.</p>
                        </div>
                        <div class="feature-text-block flex flex-col justify-center">
                            <h3 class="mb-20">NFTs and Collectibles</h3>
                            <p class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md">We’ve taken special care to make sure
                                your NFTs look great!</p>
                        </div>
                        <div class="feature-text-block flex flex-col justify-center">
                            <h3 class="mb-20">Ledger Support Swaps</h3>
                            <p class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md">For additional security you can connect
                                your hardware wallet.</p>
                        </div>
                        <div class="feature-text-block flex flex-col justify-center">
                            <h3 class="mb-20">Web3 Support</h3>
                            <p class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md">Explore the world of blockchain
                                applications built on Solana.</p>
                        </div>
                        <div class="feature-text-block flex flex-col justify-center">
                            <h3 class="mb-20">SOL Staking</h3>
                            <p class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md">Earn rewards by staking directly inside
                                your wallet.</p>
                        </div>
                    </div>
                </div>
        
                <div class="grid grid-flow-row lg:grid-flow-col lg:auto-cols-auto w-full py-60 md:py-30 px-20 rounded-md items-center 
                    justify-center lg:justify-between bg-gradient-purple-2 gap-20">
                    <div class="grid grid-flow-row lg:grid-flow-col items-center justify-items-center">
                        <img id="eth-logo" class="filter brightness-125"
                            src={ eth_logo } alt="eth-logo" />
                        <div>
                            <h2 class="text-center md:text-left hidden md:block">Join Ethereum beta</h2>
                            <h3 class="text-center md:hidden">Join Ethereum beta</h3>
                            <p class="text-center md:text-left mb-10">Sign up to join the Ethereum beta waitlist</p>
                        </div>
                    </div>
        
                    <form class="relative lg:mt-0 flex flex-row items-center">
                        <input type="email" id="input-email" class="transition w-full duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                            focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
                            placeholder="Email" />
                        <button id="submit-email" class="absolute right-2" type="button">
                            <svg class="hidden md:block" width="35" height="35" viewBox="0 0 35 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="17.5" cy="17" rx="17.5" ry="17" fill="url(#paint0_linear)" />
                                <path
                                    d="M27.7071 17.7071C28.0976 17.3166 28.0976 16.6834 27.7071 16.2929L21.3431 9.92893C20.9526 9.53841 20.3195 9.53841 19.9289 9.92893C19.5384 10.3195 19.5384 10.9526 19.9289 11.3431L25.5858 17L19.9289 22.6569C19.5384 23.0474 19.5384 23.6805 19.9289 24.0711C20.3195 24.4616 20.9526 24.4616 21.3431 24.0711L27.7071 17.7071ZM8 18L27 18V16L8 16V18Z"
                                    fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="17.5" y1="0" x2="17.5" y2="34"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7369E3" />
                                        <stop offset="1" stop-color="#443BB7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <img width="48" class="md:hidden" src={ btn_send_email } alt="send-email-button" />
                        </button>
                        <p id="invalid-email-hint" class="absolute hidden">Invalid email</p>
                    </form>
                </div>
            </div>
            <footer class="bg-footer">
                <div class="md:max-w-6xl md:mx-auto px-40 md:px-40 py-80 md:py-50 flex flex-col justify-between lg:flex-row">
                    <div class="w-full mb-40 md:mb-20 lg:mb-0 lg:w-1/2">
                        <h2 class="mb-10 inline-block w-full">Phantom</h2>
                        <p class="mb-10 text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md inline-block w-full">@ Phantom
                            Technologies, Inc.</p>
                    </div>
                    <div class="grid grid-flow-rows sm:grid-cols-2 md:grid-cols-4 md:justify-end lg:w-1/2 
                    gap-40 md:gap-0">
                        <div class="md:align-top">
                            <h3 class="mb-10">Product</h3>
                            <ul>
                                <li class="mb-10"><a
                                        class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md md:text-p2-md"
                                        href="#">Overview</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Download</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Security</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Help</a></li>
                            </ul>
                        </div>
                        <div class="md:align-top">
                            <h3 class="mb-10">Resource</h3>
                            <ul>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Overview</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Download</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Security</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Help</a></li>
                            </ul>
                        </div>
                        <div class="md:align-top">
                            <h3 class="mb-10">Company</h3>
                            <ul>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">About</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Jobs</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Press Kit</a></li>
                            </ul>
                        </div>
                        <div class="md:align-top">
                            <h3 class="mb-10">Social</h3>
                            <ul>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Twitter</a></li>
                                <li class="mb-10"><a class="text-p2-sm font-p2-sm md:text-p2-md md:font-p2-md"
                                        href="#">Discord</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}