import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PageviewIcon from '@material-ui/icons/Pageview';
import MyTemplete  from '../../../templete';



class MyAvatar extends React.Component
{
  renderAvatar()
  {
    return(
      <div className='avatar-list'>
           <h3>External Images</h3>
           <Card>
               <CardContent>
                   <div className='section'>
                       <Avatar
                           src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png"
                       />
                       <Avatar
                           src="https://image.flaticon.com/icons/png/512/146/146018.png"
                       />
                       <Avatar
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH6DalS_KpcvdezZT-tymCO2Spog0pW1g8ySWMhAPAohnxKNJ"
                       />
                   </div>
               </CardContent>
           </Card>

           <h3>Svg Icons</h3>
           <Card>
               <CardContent>
                   <div className='section'>
                       <Avatar>
                           <FolderIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#e91e63'}}>
                           <PageviewIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#4caf50'}}>
                          <AssignmentIcon/>
                       </Avatar>
                   </div>
               </CardContent>
           </Card>

           <h3>Letters</h3>
           <Card>
               <CardContent>
                   <div className='section'>
                       <Avatar>H</Avatar>
                       <Avatar style={{backgroundColor: '#ff5722'}}>N</Avatar>
                       <Avatar style={{backgroundColor: '#673ab7'}}>OP</Avatar>
                   </div>
               </CardContent>
           </Card>
       </div>
    );
  }

  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar"
    return(
      <div>
      <MyTemplete content = {output} name = {myName}/>
      </div>
    );
  }

}

export default MyAvatar;
