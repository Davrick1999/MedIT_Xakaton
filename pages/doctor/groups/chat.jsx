import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox, ChatItem, SystemMessage, MessageList, ChatList, Input, Button, Navbar, SideBar } from 'react-chat-elements';

function Posts() {
    
    let inputRef = React.createRef()


  return (
    <div className="flex flex-col items-center min-h-screen">
        <Head>
          <title>Doctor main</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className="py-4">
              <div className="text-2xl my-4">Tags:</div>
              <div></div>
            </div>
            <div className="py-4">
                <ChatItem
                    avatar={'https://facebook.github.io/react/img/logo.svg'}
                    alt={'Reactjs'}
                    title={'Facebook'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={0} />
            </div>

            <MessageBox
                position={'left'}
                type={'photo'}
                text={'react.svg'}
                data={{
                    uri: 'https://facebook.github.io/react/img/logo.svg',
                    status: {
                        click: false,
                        loading: 0,
                    }
                }}/>

            <SystemMessage
                text={'End of conversation'}/>

            <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={[
                    {
                        position: 'right',
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                        date: new Date(),
                    }
                ]} />

            <ChatList
                className='chat-list'
                dataSource={[
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    }
                ]} />

            <Input
                placeholder="Type here..."
                multiline={true}
                ref={el => (inputRef = el)}
                rightButtons={
                    <Button
                        color='white'
                        backgroundColor='black'
                        text='Send'/>
                }/>

            {/* <Popup
                show={this.state.show}
                header='Lorem ipsum dolor sit amet.'
                headerButtons={[{
                    type: 'transparent',
                    color:'black',
                    text: 'close',
                    onClick: () => {
                        this.setState({show: false})
                    }
                }]}
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
                footerButtons={[{
                    color:'white',
                    backgroundColor:'#ff5e3e',
                    text:"Vazgeç",
                },{
                    color:'white',
                    backgroundColor:'lightgreen',
                    text:"Tamam",
                }]}/> */}

            <SideBar
                top={
                    <div>'TOP' area</div>
                }
                center={
                    <div>'CENTER' area</div>
                }
                bottom={
                    <div>'BOTTOM' area</div>
                }/>

            <Navbar
                left={
                    <div>'LEFT' area</div>
                }
                center={
                    <div>'CENTER' area</div>
                }
                right={
                    <div>'RIGHT' area</div>
                }/>
            
        </main>
    </div>
  );

  inputRef.clear();
}

export default Posts;
