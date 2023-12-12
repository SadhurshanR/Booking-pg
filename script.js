let singleRoomCost = 25000;
let doubleRoomCost = 35000;
let tripleRoomCost = 40000;
let ExtraBedCost = 8000;
let MealCost = 5000;
//let LoyaltyPoints = 0;

let totalHotelCost = 0; 

//Extracting data from input fields
    const nam = document.getElementById("name");
    const mobil = document.getElementById("mobile");
    const mail = document.getElementById("email");
    const checkIn = document.getElementById("checkin");
    const checkOut = document.getElementById("checkout");
    const singleRoom = document.getElementById("singleRooms");
    const doubleRoom = document.getElementById("doubleRooms");
    const tripleRoom = document.getElementById("tripleRooms");
    const exbed = document.getElementById("extraBed");
    const adult = document.getElementById("adults");
    const childrens = document.getElementById("children");
    const meal = document.getElementById("Meals");
    const promo = document.getElementById("promoCode");
    const pool = document.getElementById("poolView");
    const garden = document.getElementById("gardenView");
    const wiFi = document.getElementById("wifi");
    const Inputrooms = document.getElementById("bookingForm")

    //Buttons
    const btnBookNow = document.getElementById("booking");
    const btnCheckLoyalty = document.getElementById("LoyaltyCheck");

    //calculating the total cost
    function calculateHotelCost() {
        let Single = parseInt(singleRoom.value);
        let Double = parseInt(doubleRoom.value);
        let Triple = parseInt(tripleRoom.value);
        let Bed = parseInt(exbed.value);
        let food = parseInt(meal.value);

        let daysForTheStay = (new Date(checkOut.value) - new Date(checkIn.value)) / (24 * 60 * 60 * 1000);

        let singleCost = Single * singleRoomCost * daysForTheStay;
        let doubleCost = Double * doubleRoomCost * daysForTheStay;
        let tripleCost = Triple * tripleRoomCost * daysForTheStay;

        //fix the calculation of total hotel cost
        totalHotelCost = singleCost + doubleCost + tripleCost + (Bed * ExtraBedCost) + (food * MealCost);

        let allrooms = Single + Double + Triple; 
    }

    //Add event listeners to input 
    nam.addEventListener("input",updateRoomSummaryTable);
    mobil.addEventListener("input",updateRoomSummaryTable);
    mail.addEventListener("input",updateRoomSummaryTable);
    checkIn.addEventListener("change",updateRoomSummaryTable);
    checkOut.addEventListener("change",updateRoomSummaryTable);
    singleRoom.addEventListener("input",updateRoomSummaryTable);
    doubleRoom.addEventListener("input",updateRoomSummaryTable);
    tripleRoom.addEventListener("input",updateRoomSummaryTable);
    exbed.addEventListener("input",updateRoomSummaryTable);
    adult.addEventListener("input",updateRoomSummaryTable);
    childrens.addEventListener("input",updateRoomSummaryTable);
    meal.addEventListener("input",updateRoomSummaryTable);
    promo.addEventListener("input",updateRoomSummaryTable);
    pool.addEventListener("change",updateRoomSummaryTable);
    garden.addEventListener("change",updateRoomSummaryTable);
    wiFi.addEventListener("input",updateRoomSummaryTable);

    function updateRoomSummaryTable() {
        //Geting value from input fields
        const namValue = nam.value;
        const mobileValue = mobil.value;
        const emailValue = mail.value;
        const checkinValue = checkIn.value;
        const checkoutValue = checkOut.value;
        const adultsValue = adult.value;
        const ChildrenValue = childrens.value;
        const singleroomValue = parseInt(singleRoom.value);
        const doubleroomValue = parseInt(doubleRoom.value);
        const tripleroomValue = parseInt(tripleRoom.value);
        const extrabedValue = parseInt(exbed.value);
        const mealsValue = parseInt(meal.value);
        const promoValue = promo.value;
        const poolviewValue = pool.checked;
        const gardenviewValue = garden.checked;
        const wifiValue = wiFi.checked;
    

        //Calculating the number of days for the stay
        const daysForTheStay = (new Date(checkoutValue) - new Date(checkinValue)) / (24 * 60 * 60 * 1000);

        //calculating the cost for each room type
        let singleCost = singleroomValue * singleRoomCost * daysForTheStay;
        let doubleCost = doubleroomValue * doubleRoomCost * daysForTheStay;
        let tripleCost = tripleroomValue * tripleRoomCost * daysForTheStay;

        //calculating the total cost 
        totalHotelCost = singleCost + doubleCost + tripleCost + (extrabedValue * ExtraBedCost) + (mealsValue * MealCost);

        //calculation for promo code
        if(promoValue==="Promo123"){
            let discount=0.05*totalHotelCost
            totalHotelCost = totalHotelCost-discount;
        }

        //loyalty points
        //LoyaltyPoints = 0;

        /*if (allrooms > 3) {
            LoyaltyPoints = allrooms * 20;

        }*/        
        
        //updating the summary table 
        document.getElementById("currentBookingName").innerText = namValue;
        document.getElementById("currentBookingMobile").innerText = mobileValue;
        document.getElementById("currentBookingEmail").innerText = emailValue;
        document.getElementById("CheckInDate").innerText = checkinValue;
        document.getElementById("CheckOutDate").innerText = checkoutValue;
        document.getElementById("SingleRoom").innerText = singleroomValue;
        document.getElementById("DoubleRoom").innerText = doubleroomValue;
        document.getElementById("TripleRoom").innerText = tripleroomValue;
        document.getElementById("extraBed").innerText = extrabedValue;
        document.getElementById("NumberofAdults").innerText = adultsValue;
        document.getElementById("NumberofChildren").innerText = ChildrenValue;
        document.getElementById("PromoCode").innerText = promoValue;
        document.getElementById("MealsTable").innerText = mealsValue;
        document.getElementById("poolView").innerText = poolviewValue ? "Yes": "No";
        document.getElementById("GardenView").innerText =  gardenviewValue ? "Yes": "No";
        document.getElementById("WiFi").innerText =  wifiValue ? "Yes": "No";

    }

function overallTable(){

    document.getElementById("totalHotelCost").innerText = " LKR : " + totalHotelCost  ;
}



btnBookNow.addEventListener("click",bookButton);

function bookButton(event) {
    event.preventDefault();

    if (Inputrooms.checkValidity()) {
        calculateHotelCost();
        overallTable(); 

        // Reset the form fields and current booking table
        Inputrooms.reset();
        resetRoomSummaryTable();
    }
}

function resetRoomSummaryTable() {
    // Reseting the content of the current booking table
    document.getElementById("currentBookingName").innerText = "";
    document.getElementById("currentBookingMobile").innerText = "";
    document.getElementById("currentBookingEmail").innerText = "";
    document.getElementById("CheckInDate").innerText = "";
    document.getElementById("CheckOutDate").innerText = "";
    document.getElementById("SingleRoom").innerText = "";
    document.getElementById("DoubleRoom").innerText = "";
    document.getElementById("TripleRoom").innerText = "";
    document.getElementById("extraBed").innerText = "";
    document.getElementById("NumberofAdults").innerText = "";
    document.getElementById("NumberofChildren").innerText = "";
    document.getElementById("PromoCode").innerText = "";
    document.getElementById("MealsTable").innerText = "";
    document.getElementById("poolView").innerText = "";
    document.getElementById("GardenView").innerText =  "";
    document.getElementById("WiFi").innerText =  "";

}


//Event listener to loyalty points


// Event listener to loyalty points
/*btnCheckLoyalty.addEventListener("click", displayLoyaltyPoints);

function displayLoyaltyPoints() {
    alert(`Loyalty Points: ${LoyaltyPoints} Loyalty points`);
    saveLP();
}

function saveLP() {
    localStorage.setItem("loyaltyPoints", LoyaltyPoints.toString());
    alert("Loyalty points saved to local storage");
}*/



















/////////////////////////////////////////////////////////////////////////////////////////////

//adventure Booking
const localAdultsCost = 5000;
const localKidsCost = 2000;
const foreignAdultsCost = 10000;
const foreignKidsCost = 5000;

let totalAdventureCost = 0;

const AdvName = document.getElementById("Advname")
const localAdult = document.getElementById("AdvlocalAdult");
const localKid = document.getElementById("AdvlocalKid");
const foreignAdult = document.getElementById("AdvforeingnAdult");
const foreignKid = document.getElementById("AdvforeignKid");
const guideForAdult = document.getElementById("GuideAdult");
const guideForKid = document.getElementById("GuideKid");
const InputAdv = document.getElementById("AdvbookingForm");
//btns
const AdvBookNow= document.getElementById("AdvbookNow");
//const AdvFavorite = document.getElementById("Favorites");

function calculateAdventureCost(){
    let localA = parseInt(localAdult.value);
    let localK = parseInt(localKid.value);
    let foreignA = parseInt(foreignAdult.value);
    let foreignK = parseInt(foreignKid.value);

    let localACost = (localA * localAdultsCost);
    let localKCost = (localK * localKidsCost);
    let foreignACost = (foreignA * localAdultsCost);
    let foreignKCost = (foreignK * localKidsCost);

    totalAdventureCost =  localACost + localKCost + foreignACost +foreignKCost;

    totalCost = totalAdventureCost + totalHotelCost;


}

//add evnt listeners to input fields
AdvName.addEventListener("input",updateAdventureSummaryTable)
localAdult.addEventListener("input",updateAdventureSummaryTable);
localKid.addEventListener("input",updateAdventureSummaryTable);
foreignAdult.addEventListener("input",updateAdventureSummaryTable);
foreignKid.addEventListener("input",updateAdventureSummaryTable);
guideForAdult.addEventListener("change",updateAdventureSummaryTable);
guideForKid.addEventListener("change",updateAdventureSummaryTable);

function updateAdventureSummaryTable(){

    calculateAdventureCost();
    const AdvnameValue = AdvName.value
    const localadultValue = localAdult.value;
    const localkidsValue = localKid.value;
    const foreignadultValue = foreignAdult.value;
    const foreingkidValue = foreignKid.value;
    const guideadultValue = guideForAdult.checked;
    const guidkidsValue = guideForKid.checked;



    document.getElementById("AdvBookingName").innerText=AdvnameValue;
    document.getElementById("AdvBookingLocalA").innerText=localadultValue;
    document.getElementById("AdvBookingLocalKid").innerText=localkidsValue;
    document.getElementById("AdvBookingForeignA").innerText=foreignadultValue;
    document.getElementById("AdvBookingForeignkids").innerText=foreingkidValue;
    document.getElementById("AdvBookingGuideAdults").innerText=guideadultValue ? "Yes" : "No";
    document.getElementById("AdvBookingGuidekids").innerText=guidkidsValue ? "Yes" : "No";

}

function overallAdvBookingTable(){

    document.getElementById("totalAdventureCost").innerText = " LKR : " + totalAdventureCost  ;
    document.getElementById("totalCost").innerText = " LKR : " + totalCost  ;
    
}


AdvBookNow.addEventListener("click",bookAdvButton);

function bookAdvButton(event) {
    event.preventDefault();

    if (InputAdv.checkValidity()) {
        calculateAdventureCost();
        overallAdvBookingTable(); 

        // Resetting the Adventure form
        InputAdv.reset();
        resetAdvTable();
    }
}

function resetAdvTable() {
    document.getElementById("AdvBookingName").innerText="";
    document.getElementById("AdvBookingLocalA").innerText="";
    document.getElementById("AdvBookingLocalKid").innerText="";
    document.getElementById("AdvBookingForeignA").innerText="";
    document.getElementById("AdvBookingForeignkids").innerText="";
    document.getElementById("AdvBookingGuideAdults").innerText="";
    document.getElementById("AdvBookingGuidekids").innerText="";

}

//Add to favourites
const AdvFavorite = document.getElementById("Favorites");
AdvFavorite.addEventListener("click",AddFavourite);
function AddFavourite(event) {

    event.preventDefault();

    localStorage.setItem("favourites",JSON.stringify(favourites));

    alert("Added to Favourites!");

}

function AddFavourite(){
    const favourites = {
         AdvnameValue: AdvName.value,
         localadultValue: localAdult.value,
         localkidsValue: localKid.value,
         foreignadultValue: foreignAdult.value,
         foreingkidValue: foreignKid.value,
         guideadultValue:  guideForAdult.checked,
         guidkidsValue: guideForKid.checked,

    };

    resetAdventure();

    localStorage.setItem("favourites",JSON.stringify(favourites));

    alert ("Added to favorites");

}













