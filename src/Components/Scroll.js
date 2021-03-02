import React from 'react';

const Scroll = (props) =>{
    return(
     <div style={{overflowY: 'scroll', border:'3px solid grey', height: '68vh'}}>
          {props.children}
    </div>
  );
       
}
export default Scroll;