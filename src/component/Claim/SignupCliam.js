import "./signupClaims.css"
const SignupCliam = () => {
  return (
    <>
    <div className="signup_referContainer">
    <div className='signupDeal_claim'>
        <div className="signupContent_div">
            <h1>Signup today and claim your free box</h1>
            <p>Unlock your free box today</p>
            <button>Claim now</button>

        </div>
        <div className="referFriendContent">
            <img src="/images/signupImage.png" alt="claimimg" />
        </div>

    </div>
    <div className="referFreind_Container">
        <p className="referMainP">Earn upto to 10% on deposits from your friends</p>
        <p className="secPara">Give your frinds  a 5% bonus  </p>
        <p className="secPara">added to all there cash price</p>
        <div className="referImg">
          <img src="images/refer.png" alt="refer" />
        </div>
    </div>
    </div>
    </>
  )
}

export default SignupCliam