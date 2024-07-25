import React from 'react'

export const ProfileCard = () => {
  return (
    
    

    <table style={{ width: '100%' }}>  {/* Set table width to 100% */}
          <tbody>
            <tr>
              <td style={{ fontWeight: 'bold', margin: '5px 10px 5px 0' } }>NAME</td>
              <td>KIWEEWA GODFREY</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', margin: '5px 10px 5px 0' }}>PROGRAMME</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', margin: '5px 10px 5px 0'}}>REG NO</td>
              <td>23A/KTI/NDICT/156</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', margin: '5px 10px 5px 0' }}>PROGRAM STATS</td>
              <td>1:2</td>
            </tr>
            
          </tbody>
        </table>



  )
}


export default ProfileCard;