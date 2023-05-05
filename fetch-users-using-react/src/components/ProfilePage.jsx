import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import { fetchUser } from "../redux/Actions"
const ProfilePage=()=>{
    const dispatch=useDispatch();
    const params=useParams();
    const id=params.id;
    const loading=useSelector(state=>state.user.loading);
    const userData=useSelector(state=>state.user.data);
    const error=useSelector(state=>state.user.error);

    useEffect(()=>{
          dispatch(fetchUser(id));
    },[])
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>
    return <div className="ProfilePage">
      <h1>Profile Page</h1>
      <img src={userData.image} alt="user-image"/>
        <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{userData.id}</td>
          </tr>
          <tr>
            <td>USER NAME</td>
            <td>{userData.username}</td>
          </tr>
          <tr>
            <td>FIRST NAME</td>
            <td>{userData.firstName}</td>
          </tr>
          <tr>
            <td>LAST NAME</td>
            <td>{userData.lastName}</td>
          </tr>
          <tr>
            <td>MAIDEN NAME</td>
            <td>{userData.maidenName}</td>
          </tr>
          <tr>
            <td>GENDER</td>
            <td>{userData.gender}</td>
          </tr>
          <tr>
            <td>SSN</td>
            <td>{userData.ssn}</td>
          </tr>
          <tr>
            <td>EIN</td>
            <td>{userData.ein}</td>
          </tr>
          <tr>
            <td>PHONE NO</td>
            <td>{userData.phone}</td>
          </tr>
          <tr>
            <td>E-MAIL</td>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <td>ADDRESS</td>
            <td>
              {userData.address.address} {userData.address.city}{" "}
              {userData.address.state} {userData.address.postalCode}
            </td>
          </tr>
          <tr>
            <td>UNIVERSITY</td>
            <td>{userData.university}</td>
          </tr>
          <tr>
            <td>COMPANY NAME</td>
            <td>{userData.company.name}</td>
          </tr>
          <tr>
            <td>DESIGNATION</td>
            <td>{userData.company.title}</td>
          </tr>
          <tr>
            <td>DEPARTMENT</td>
            <td>{userData.company.department}</td>
          </tr>
          <tr>
            <td>DOMAIN</td>
            <td>{userData.domain}</td>
          </tr>
          <tr>
            <td>COMPANY ADDRESS</td>
            <td>
              {userData.company.address.address}{" "}
              {userData.company.address.city} {userData.company.address.state}{" "}
              {userData.company.address.postalCode}
            </td>
          </tr>
          <tr>
            <td>IBAN</td>
            <td>{userData.bank.iban}</td>
          </tr>
          <tr>
            <td>CARD NO</td>
            <td>{userData.bank.cardNumber}</td>
          </tr>
          <tr>
            <td>CARD TYPE</td>
            <td>{userData.bank.cardType}</td>
          </tr>
          <tr>
            <td>CARD EXPIRY</td>
            <td>{userData.bank.cardExpire}</td>
          </tr>
          <tr>
            <td>CURRENCY</td>
            <td>{userData.bank.currency}</td>
          </tr>
          <tr>
            <td>MAC ADDRESS</td>
            <td>{userData.macAddress}</td>
          </tr>
          <tr>
            <td>IP ADDRESS</td>
            <td>{userData.ip}</td>
          </tr>
          <tr>
            <td>USER AGENT</td>
            <td>{userData.userAgent}</td>
          </tr>
          <tr>
            <td>BIRTH DATE</td>
            <td>{userData.birthDate}</td>
          </tr>
          <tr>
            <td>AGE</td>
            <td>{userData.age}</td>
          </tr>
          <tr>
            <td>WEIGHT</td>
            <td>{userData.weight}</td>
          </tr>
          <tr>
            <td>HEIGHT</td>
            <td>{userData.height}</td>
          </tr>
          <tr>
            <td>EYE COLOR</td>
            <td>{userData.eyeColor}</td>
          </tr>
          <tr>
            <td>BLOOD GROUP</td>
            <td>{userData.bloodGroup}</td>
          </tr>
          <tr>
            <td>HAIR COLOR & TYPE</td>
            <td>
              {userData.hair.color} {userData.hair.type}
            </td>
          </tr>
          </tbody>
        </table>
  </div>
}

export default ProfilePage