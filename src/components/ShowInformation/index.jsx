import React, { Component } from 'react';

class ShowInformation extends Component {
   state = {
     name: '',
     age: 0,
     show: false,
   };

   handleOnChange = ({ target: { value, name } }) => {
     this.setState({
       [name]: value,
     });
   };

   handleShowInformation = () => {
     this.setState({
       show: true,
     });
   };

   render() {
     const { show, age, name } = this.state;

     if (show) {
       return (
         <div className="ShowInformation">
           <h1>Personal Information</h1>
           <div className="personalInformation">
             <p><strong>Name:</strong> {name}</p>
             <p><strong>Age:</strong> {age}</p>
           </div>
         </div>
       );
     }

     return (
       <div className="ShowInformation">
         <h1>Personal Information</h1>
         <p><strong>Name:</strong></p>
         <p>
           <input
             name="name"
             type="text"
             value={name}
             onChange={this.handleOnChange}
           />
         </p>
         <p>
           <input
             name="age"
             type="number"
             value={age}
             onChange={this.handleOnChange}
           />
         </p>
         <p>
           <button
             type="button"
             onClick={this.handleShowInformation}
           >
            Show Information
           </button>
         </p>
       </div>
     );
   }
}

export default ShowInformation;
