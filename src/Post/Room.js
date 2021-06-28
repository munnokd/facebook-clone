import React from 'react'
import './Room.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function Room() {
    return (
        <div className="room">
            <div className="room__create">
                <VideoCallIcon className="room__create__icon" />
                <h4>Create Room</h4>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/129013141_397375211460509_8676430915836451293_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=LEIiJthBZYcAX-CGX3c&_nc_ht=scontent.famd1-3.fna&oh=14a4328efc8e517d6e31e16c9fb9f7d0&oe=60DBD924" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-0/p600x600/109905039_102776571527828_1925920764989816321_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QAWBgDx49t0AX-tc-6S&_nc_ht=scontent.famd1-1.fna&tp=6&oh=e206a35c02965a4f0f01499ecdffd889&oe=60DD4F3A" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/s1080x2048/104573989_726575601494589_875558489062870788_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=homLrsQWUKsAX8Qt6VM&_nc_ht=scontent.famd1-3.fna&tp=7&oh=8149e1052a2ad7f36cbd65530c9f2fde&oe=60DD0B44" /></IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/196499491_481042209834886_1141512070312558851_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=6JsJHm5d0x0AX-rDZ_h&_nc_ht=scontent.famd1-3.fna&oh=97bef1abe8e8f7ba3e524244df508c77&oe=60DD912F" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-0/p600x600/56596582_100111917856605_3678890353768792064_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wJZsCNFVlboAX-L-mfV&_nc_ht=scontent.famd1-1.fna&tp=6&oh=131b662303953d1c2ebdbd3c55ac9032&oe=60DCCCAB" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.18169-0/p600x600/16406753_1855598924688035_7098066673597196283_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YuATe1UPsJwAX-L2nqJ&tn=Bbh83L-JM7TLRDFl&_nc_ht=scontent.famd1-3.fna&tp=6&oh=c571e00837b31938a38b3efd692c2ec0&oe=60DD33CF" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-2.fna.fbcdn.net/v/t31.18172-8/p960x960/19693837_894508674029524_2966467447358720682_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=Eg1l0Ezc8C0AX8GR1CH&_nc_ht=scontent.famd1-2.fna&tp=6&oh=5caeff9a578a7a0dc85aa5c5eef735fa&oe=60DCB5EF" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-0/p600x600/136936894_4880508002022830_8089342860897659670_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=E9WUedjNKhgAX9mVzpv&_nc_ht=scontent.famd1-1.fna&tp=6&oh=87fffcd644195cf054bf248aae6cd561&oe=60DC5D66" />
                </IconButton>
            </div>
            <div className="room__avatar">
                <IconButton>
                    <Avatar src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.18169-9/12832525_1004932172921264_2625763151710955592_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=MD3lLbE64xcAX9J1VdL&_nc_ht=scontent.famd1-1.fna&oh=f26f3db68c48f2753ed3541e2fec430b&oe=60DD5FC1" />
                </IconButton>
            </div>

        </div>
    )
}

export default Room
