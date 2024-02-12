import { Button, ProfileDropDown, AlertPopupHeader, AlertPopupBody, AlertPopupFooter, useModal, Navbar, AlertPopup, Alert } from "@attrybtech/attryb-ui";
import { useState } from 'react';
import "../styles/Navbar.css";
import TweetText from "./TweetText.jsx";

export default function Nav({onTweetPost}) {
    //                    Navbar Code
    const [showProfile, setShowProfile] = useState(false);
    let tweet = "";
    const name = "Cristiano Ronaldo"
    const email = "cr7@gmail.com"
    const userImage = ""
    const organizationName = ""
    // const attrybLogo = "/attryb-ui/assets/icons/navbar/attryb-logo.svg"

    // const navigate = useNavigate()
    const urlCallBack = (domain,url, openIn) => {        
        if (!url) return

        if (openIn === "redirect") {
            // navigate(url);
        } else {
            window.open(`${domain}${url}`, openIn, "noreferrer")
        }
    }

    const handleProfileToggle = () => {
        setShowProfile(!showProfile)
    }

    const hideProfileHandler = () => {
        setShowProfile(false)
    }

    const productsConfig = [
        {
            id:"94232b08-7d33-11ed-9f3b-00155d3e8ac7",
            domain:"https://personalization-demo.attryb.com",
        },
        {
            id:"942338b7-7d33-11ed-9f3b-00155d3e8ac7",
            domain:"https://alpha.attryb.com",
            active:true
        }
    ]
    const signOutCallBack =()=>{
        //logic of signOut
    }

    //                        Pop Up Code
    const { modalState, modalRef, exitModal, showModal } = useModal()

    const modalOkayHandler = () => {
        // alert("Tweet posted successfully!");
        onTweetPost(tweet);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
        exitModal();
    }

    const modalCancelHandler = () => {
        console.log("Cancelled");
        exitModal()
    }

    //                         Alert Code
    const [themeofAlert,setAlertTheme]=useState("success");
    const [showAlert,setShowAlert]=useState(false);

    function handleInputChange (value) {
        tweet = value;
    }

    return (
        <div className="navbar-wrapper">
            {showAlert? (<Alert content="Tweet posted successfully!!" theme={themeofAlert} />) : <></>}
            <Navbar
                navbarLeftSection={
                        <div className="navbar-left">
                            <ul className="navbar-ul">
                                <li className="navbar-li">Home</li>
                                <li className="navbar-li">Messages</li>
                                <li className="navbar-li">Notifications</li>
                                <li className="navbar-li">Messages</li>
                            </ul>
                        </div>
                }
                navbarRightSection = {
                    <>
                    <div className="tweet-btn">
                        <Button onClick={showModal}>Tweet</Button>
                        <AlertPopup
                            wrapperRef={modalRef}
                            name="example-popup-1"
                            visibility={modalState}
                            onBackdropClick={modalCancelHandler}>
                            <AlertPopupHeader>Post a tweet</AlertPopupHeader>
                            <AlertPopupBody>
                                <TweetText onInputChange = {handleInputChange} />
                            </AlertPopupBody>
                            <AlertPopupFooter>
                                <Button onClick={modalCancelHandler} variant="link">
                                    Cancel
                                </Button>
                                <Button onClick={modalOkayHandler}>Post</Button>
                            </AlertPopupFooter>
                        </AlertPopup>
                    </div>
                    <ProfileDropDown
                        showProfile={showProfile}
                        hideProfileHandler={hideProfileHandler}
                        handleProfileToggle={handleProfileToggle}
                        productsConfig={productsConfig}
                        userImage={userImage}
                        organizationName={organizationName}
                        name={name}
                        email={email}
                        urlCallBack={urlCallBack}
                        profileChevronIcon={
                            "/attryb-ui/assets/icons/navbar/chevron-white.svg"
                        }
                        productChevronIcon={
                            "/attryb-ui/assets/icons/navbar/chevron-black.svg"
                        }
                        settingUrlOpenIn="redirect"
                        signOutCallBack={signOutCallBack}
                    />
                    </>
                }
            />
        </div>
    );
}