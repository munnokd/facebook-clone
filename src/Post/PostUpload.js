import React, { useEffect, useState } from 'react'
import './PostUpload.css'
import StoryFb from './StoryFb'
import PostSend from './PostSend'
import Room from './Room'
import Post from './Post'
import db from '../firebase'

function PostUpload() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
        )
    },[])

    return (
        <div className="postUpload">
            <div className="storyFb">
            
                <StoryFb src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/186472560_4079757062082771_8811357701784283229_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=OfWREz3Z0sgAX-mxKU3&_nc_ht=scontent.famd1-3.fna&oh=d374d8999e37b7ecdb07911615aeae91&oe=60DAEF68" img="https://scontent.famd1-2.fna.fbcdn.net/v/t1.6435-9/201425715_4179722188752924_5401163984774890994_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=GdFej-IADEwAX-vyhgt&_nc_ht=scontent.famd1-2.fna&oh=ee732aa3e44e08d55a20ca701ba220e4&oe=60DC18A9" title="Chirag Prajapati"/>
                <StoryFb src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/s1080x2048/104573989_726575601494589_875558489062870788_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=homLrsQWUKsAX-7YmMD&_nc_ht=scontent.famd1-3.fna&tp=7&oh=db736c954940b12aea4d062d9f6ed3a0&oe=60DB1104" img="https://scontent.famd1-2.fna.fbcdn.net/v/t1.6435-0/s600x600/104217525_726574911494658_5783715536339752910_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HJ0gfzo690cAX8hoyii&_nc_ht=scontent.famd1-2.fna&tp=7&oh=3ee4c23c34c45958a5ed63eaa2deb8eb&oe=60DB0F79" title="Dinesh Prajapati"/>
                <StoryFb src="https://scontent.famd1-3.fna.fbcdn.net/v/t31.18172-8/s1080x2048/12195063_1662536260660970_8906424294699422719_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Y1FlljHRzuEAX9GevX9&_nc_ht=scontent.famd1-3.fna&tp=7&oh=2bee58acb862a6a47c57b1c79846240e&oe=60DAA8E5" img="https://scontent.famd1-3.fna.fbcdn.net/v/t1.18169-0/p600x600/16406753_1855598924688035_7098066673597196283_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YuATe1UPsJwAX_33O-l&tn=Bbh83L-JM7TLRDFl&_nc_ht=scontent.famd1-3.fna&tp=6&oh=6597eda0fe227e4718e49f4fd35f2794&oe=60DB398F" title="Shrey Patel"/>
                <StoryFb src="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-0/p600x600/136936894_4880508002022830_8089342860897659670_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=E9WUedjNKhgAX_i2wgs&_nc_ht=scontent.famd1-1.fna&tp=6&oh=c8f35ffedaf0d1752a18e571769d8963&oe=60DC5D66" img="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/p960x960/72471163_3104195372987444_7036368698252197888_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=8_mXOARVWnwAX-3lDB7&_nc_ht=scontent.famd1-3.fna&tp=6&oh=072402813889ec8853f57a05c42febc4&oe=60DAF78A" title="Nirmit Dave"/>
                <StoryFb src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/196499491_481042209834886_1141512070312558851_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=6JsJHm5d0x0AX_moNhV&_nc_ht=scontent.famd1-3.fna&oh=83d6655c8e6214f02fdc942606627115&oe=60DB96EF" img="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/193847401_481607163111724_7473813809932149516_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=ZNk_IeSGLZYAX9G4nx2&_nc_ht=scontent.famd1-1.fna&oh=33bcaab263d8d83a0a1c71ebaa561754&oe=60DA804A" title="Zeel Prajapti"/>
            </div>
            <PostSend/>
            <Room/>
            {posts.map(post=>(
                <Post
                key={post.id}
                image={post.data.image}
                username={post.data.username}
                timestamp={post.data.timestamp}
                message={post.data.message}
                profilePic={post.data.profilePic}
                likes={post.data.likes}
                noComments={post.data.noComments}
                noShares={post.data.noShares}/>

            ))}
        </div>
    )
}

export default PostUpload
