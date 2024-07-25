import React from 'react';
import StudentQuering from './StudentQuering';
import  './Enroll.css'


const UpdateAccountStatus = () => {
 
  return (
    <div>
      <StudentQuering/>
      <div className="tablecontainer" >
      <table className="Status">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>EMAIL</th>
            <th>Actions</th>
          </tr> 

        </thead>
        
        <tbody>
          
              <tr >
                <td  className="thData">Kiweewa Godfrey</td>
                <td  className="thData">NDICT</td>
                <td  className="thData">kiweewa7g@gmail.com</td>
                <td  className="thData">
                  <select>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
              </tr>

              <tr >
                <td  className="thData">Sempala</td>
                <td className="thData">NDICT</td>
                <td  className="thData">Sempag@gmail.com</td>
                <td  className="thData">
                  <select>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
              </tr>
       
          
        </tbody>
      </table>
     

      </div>
      <button className="ButtonsUp Exapnder">
        Save Changes
      </button>
      <button className="ButtonsUp">
        Cancel Changes
      </button>
    </div>
  );
};

export default  UpdateAccountStatus;

