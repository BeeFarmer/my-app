import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';


class MyAvatar extends React.Component
{
  renderAvatar()
  {
    return(
      <div className='avatar-list'>
           <h3>External Images</h3>
           <Card className = "section">
               <CardContent >
                   <div className = "avatar-display">
                       <Avatar
                           src="data:image/png;base64,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"
                       />
                       <Avatar
                           src="http://www.iconbeast.com/images/iconBeast-logo.jpg"
                       />
                       <Avatar
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZXOYPJ1LXYxtJFUpJUJvJvIYA9w7tZCAq-VMYp4dvoDuHrsV"
                       />
                   </div>
               </CardContent>
           </Card>

           <h3>Svg Icons</h3>
           <Card className = "section">
               <CardContent>
                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#8abc89'}}>
                           <FolderIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#e91e63'}}>
                           <ThreeDRotationIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#4caf50'}}>
                          <DeleteOutlinedIcon/>
                       </Avatar>
                   </div>
               </CardContent>
           </Card>

           <h3>Letters</h3>
           <Card className = "section">
               <CardContent>
                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#457ab2'}}>R</Avatar>
                       <Avatar style={{backgroundColor: '#ff5722'}}>U</Avatar>
                       <Avatar style={{backgroundColor: '#673ab7'}}>I</Avatar>
                   </div>
               </CardContent>
           </Card>
       </div>
    );
  }

  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar";
    let string = `

    import Avatar from '@material-ui/core/Avatar';

     <div>
       <Avatar
           src="your link"
       />
       <Avatar>
         <Your Icon>
       </Avatar>
       <Avatar>
         Your Text
       </Avatar>
     </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default MyAvatar;
