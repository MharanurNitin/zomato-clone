import React from 'react'
import FirstAccordion from './FirstAccordion'
import SecondAccordion from './SecondAccordion';

function ExploreNear() {
     let str1 =
       "Bakery food,near meBeverages food,near meBiryani food,near meBurger food,near meChinese food,near meDesserts food,near meIce Cream food,near meItalian food,near meKebab food,near meMaharashtrian food,near meMughlai food,near meNorth Indian food,near mePizza food,near meRolls food,near meSandwich food,near meSeafood food,near meShake food,near meSichuan food,near meSouth Indian,food near,meStreet food near me";
     let arr = str1.split(",");
     let str2 =
       "Bakeries,near meBars,near meBeverage Shops,near meBhojanalya,near meCafés,near meCasual Dining,near meClubs,near meCocktail Bars,near meConfectioneries,near meDessert Parlors,near meDhabas,near meFine Dining,near meFood Courts,near meFood Trucks,near meIrani Cafes,near meKiosks,near meLounges,near meMicrobreweries,near mePaan Shop,near mePubs,near meQuick Bites,near meShacks,near meSweet Shops,near me";
      let arr2=str2.split(",");
      let str3 =
        "BikanervalaBiryani BluesBurger KingDomino'sDunkin' DonutsKFCKrispy KremeMcDonald'sPizza HutWOW!-Momo";
        let arr3=str3.split(" ");
        let str4="Delhi NCR,Kolkata,Mumbai,Bengaluru,Pune,Hyderabad,Chennai,Lucknow,Kochi,Jaipur,Ahmedabad,Chandigarh,Goa,Indore,Gangtok,Nashik,Ooty,Shimla,Ludhiana,Guwahati,Amritsar,Kanpur,Allahabad,Aurangabad,Bhopal,Ranchi,Visakhapatnam,Bhubaneswar,Coimbatore,Mangalore,Vadodara,Nagpur,Agra,Dehradun,Mysore,Puducherry,Surat,Varanasi,Patna,Udaipur,KhajurahoNeemrana,Cuttack,Trivandrum,Haridwar,Leh,Pushkar,Rajkot,Madurai,Kozhikode,Alappuzha,Thrissur,Manipal,Vijayawada,Jodhpur,Kota,Ajmer,Mussoorie,Rishikesh,Jalandhar,Jammu,Manali,Dharamshala,Raipur,See more"
       let arr4=str4.split(",")
       return (
         <div
           className="exploreNear-container"
           style={{
             width: "86%",
             height: "auto",
             paddingBottom: "100px",
             display: "flex",
             flexDirection: "column",
             gap: "20px",
             alignItems: "center",
             justifyContent: "center",
           }}
         >
           <h1>Explore options near me</h1>
           <FirstAccordion arr={arr} title="Popular cuisines near me" />
           <FirstAccordion
             arr={arr2}
             title="Popular restaurant types near me"
           />

           <SecondAccordion arr={arr4} title="Cities We Deliver To" />
           <SecondAccordion arr={arr3} title="Top Restaurant chanins" />
         </div>
       );
}

export default ExploreNear