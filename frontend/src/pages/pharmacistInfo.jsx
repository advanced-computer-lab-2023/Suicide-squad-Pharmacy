import NavBar from "../components/NavBar";
import NavBarAdministrator from "../components/NavBarAdministrator";
import MedicineList from "../components/medicineList";

function PharmacistView(){
return (
    <div>
        <NavBarAdministrator/>
        <h1>Pharmacist Info</h1>
        <ul>
            <h3>Name:</h3>
            <h3>UserName:</h3>
            <h3>Email:</h3>
            <h3>Date of Birth:</h3>
            <h3>Hourly Rate:</h3>
            <h3>Affiliation:</h3>
            <h3>Educational Background:</h3>

        </ul>
        <button>
            Remove Pharmacist
        </button>
        </div>
)
}
export default PharmacistView;