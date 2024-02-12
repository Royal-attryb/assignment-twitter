import { Sidebar } from "@attrybtech/attryb-ui";
import '../styles/Main.css';
import Tweets from './Tweets.jsx';
import logo from '../images/twitter.jpg';

export default function Main({tweets}) {
    // console.log(tweet);

    const handleSupportCallback=()=>{
        window.open('https://attryb.com', '_blank');
    }

    return (
        <div className="main-wrapper">
            <div className="sidebar">
                <Sidebar
                    sideBarHeaderData={{
                        sideBarHeaderTitle: "Details",
                        sideBarLogo: `${logo}`,
                    }}
                    
                    sidebarData={[
                        {
                            _id: "1",
                            title: "Tweets",
                            route: "#",
                            asset: `${logo}`,
                            subItems:[
                                {
                                    _id: "881",
                                    title: "Find People",
                                    route: "people",
                                    asset: `${logo}`
                                },
                                {
                                    _id: "882",
                                    title: "Pre-Built Segments",
                                    route: "segments",
                                    asset: `${logo}`,
                                }
                            ]
                        },
                        {
                            _id: "2",
                            title: "Following",
                            route: "#",
                            asset: `${logo}`,
                            subItems:[
                                {
                                    _id: "881",
                                    title: "Find People",
                                    route: "people",
                                    asset: `${logo}`
                                },
                                {
                                    _id: "882",
                                    title: "Pre-Built Segments",
                                    route: "segments",
                                    asset: `${logo}`,
                                }
                            ]
                        },
                        {
                            _id: "3",
                            title: "Followers",
                            route: "#",
                            asset: `${logo}`,
                            subItems:[
                                {
                                    _id: "881",
                                    title: "Find People",
                                    route: "people",
                                    asset: `${logo}`
                                },
                                {
                                    _id: "882",
                                    title: "Pre-Built Segments",
                                    route: "segments",
                                    asset: `${logo}`,
                                }
                            ]
                        }
                    ]}
                    handleItemOnClick={()=>{}}
                    supportCallback={handleSupportCallback}
                />
            </div>
            <div className="main">
                <Tweets tweets={tweets} />
            </div>
        </div>
    )
}