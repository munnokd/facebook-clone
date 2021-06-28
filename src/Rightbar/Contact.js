import React from 'react'
import './Contact.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function Contact() {
    return (
        <div className="contact">
            <div className="contact__contacts">
                <h4>Contacts</h4>
                <div className="contact__icons">
                <IconButton>
                    <VideoCallIcon/>
                </IconButton>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <MoreHorizIcon/>
                </IconButton>
                </div>
            </div>
            <div className="contact__avatar">
            <IconButton>
                <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/87376600_117457876508953_3750280282255654912_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=e3f864&_nc_ohc=4FyXXFwPkIQAX9PouiU&_nc_ht=scontent.famd1-1.fna&oh=252c7102f35f94cbb3230c3641523fc3&oe=60DD9411"/>
                </IconButton>
                <h4>Kalp Prajapati</h4>
            </div>
            <div className="contact__avatar">
            <IconButton>
                <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/196499491_481042209834886_1141512070312558851_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=6JsJHm5d0x0AX-rDZ_h&_nc_ht=scontent.famd1-3.fna&oh=97bef1abe8e8f7ba3e524244df508c77&oe=60DD912F"/>
                </IconButton>
                <h4>Zeel Prajapati</h4>
            </div>
            <div className="contact__avatar">
            <IconButton>
                <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-0/p600x600/136936894_4880508002022830_8089342860897659670_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=E9WUedjNKhgAX9mVzpv&_nc_ht=scontent.famd1-1.fna&tp=6&oh=87fffcd644195cf054bf248aae6cd561&oe=60DC5D66"/>
                </IconButton>
                <h4>Nirmit Dave</h4>
            </div>
            <div className="contact__avatar">
            <IconButton>
                <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.18169-0/p600x600/16406753_1855598924688035_7098066673597196283_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YuATe1UPsJwAX-L2nqJ&tn=Bbh83L-JM7TLRDFl&_nc_ht=scontent.famd1-3.fna&tp=6&oh=c571e00837b31938a38b3efd692c2ec0&oe=60DD33CF"/>
                </IconButton>
                <h4>Shrey Patel</h4>
            </div>
            <div className="contact__avatar">
            <IconButton>
                <Avatar src="https://scontent.famd1-2.fna.fbcdn.net/v/t31.18172-8/p960x960/19693837_894508674029524_2966467447358720682_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=Eg1l0Ezc8C0AX8GR1CH&_nc_ht=scontent.famd1-2.fna&tp=6&oh=5caeff9a578a7a0dc85aa5c5eef735fa&oe=60DCB5EF"/>
                </IconButton>
                <h4>Manthan Oza</h4>
            </div>
            <div className="contact__avatar">
            <IconButton>
                <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-0/p600x600/56596582_100111917856605_3678890353768792064_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wJZsCNFVlboAX-L-mfV&_nc_ht=scontent.famd1-1.fna&tp=6&oh=131b662303953d1c2ebdbd3c55ac9032&oe=60DCCCAB"/>
                </IconButton>
                <h4>Tirth Shah</h4>
            </div>
        </div>
    )
}

export default Contact
