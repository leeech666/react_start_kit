import React, {Component} from "react";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withRouter } from "react-router-dom";

class NavTabs extends Component {

 handleCallToRouter = (event,value) => {
	 var util=require('util'); 
	 console.log(util.inspect(value));  

	console.log('value='+value) ;
   this.props.history.push(value);
 }

  render () {
     return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        >
        <Tab
          label="Home"
          value="/"
        >
       
        </Tab>
        <Tab
          label="Portfolio"
          value="/portfolio"
            >
         
        </Tab>
      </Tabs>           
    )
  }
}

export default withRouter(NavTabs) 