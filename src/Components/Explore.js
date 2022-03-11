import React, { useState } from 'react'
import Deliver from './Deliver'
import ExploreContainer from './ExploreContainer'


function Explore() {


    let restaurant = [
        {

            "name": "Bikanervala",

        },
        {

            "name": "Biryani Blues",

        },
        {

            "name": "BTW",

        },
        {

            "name": "Burger King",

        },
        {

            "name": "Burger Singh",

        },
        {

            "name": "Domino's",

        },
        {

            "name": "Dunkin's Donuts",

        },
        {

            "name": "Haldiram's",

        },
        {

            "name": "KFC",

        },

        {

            "name": "Krispy Kreme",

        },

        {
            "name": "McDonald's",
        },
        {
            "name": "Moti Mahal Delux",
        },
        {
            "name": "Om Sweets & Snacks",
        },
        {
            "name": "Paradise Biryani",
        },
        {
            "name": "Pizza Hut",
        },
        {
            "name": "Sagar Ratna",
        },
        {
            "name": "Subway",
        },
        {
            "name": "WOW! Momo",
        }]
    const cities = [
        {
            "id": "1",
            "name": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "id": "2",
            "name": "Delhi",
            "state": "Delhi"
        },
        {
            "id": "3",
            "name": "Bengaluru",
            "state": "Karnataka"
        },
        {
            "id": "4",
            "name": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "id": "5",
            "name": "Hyderabad",
            "state": "Telangana"
        },
        {
            "id": "6",
            "name": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "id": "7",
            "name": "Kolkata",
            "state": "West Bengal"
        },

        {
            "id": "11",
            "name": "Lucknow",
            "state": "Uttar Pradesh"
        },
        {
            "id": "12",
            "name": "Kanpur",
            "state": "Uttar Pradesh"
        },
        {
            "id": "13",
            "name": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "id": "14",
            "name": "Patna",
            "state": "Bihar"
        },
        {
            "id": "15",
            "name": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "id": "16",
            "name": "Thane",
            "state": "Maharashtra"
        },
        {
            "id": "17",
            "name": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "id": "18",
            "name": "Visakhapatnam",
            "state": "Andhra Pradesh"
        },
        {
            "id": "19",
            "name": "Vadodara",
            "state": "Gujarat"
        },
        {
            "id": "20",
            "name": "Firozabad",
            "state": "Uttar Pradesh"
        },
        {
            "id": "21",
            "name": "Ludhiana",
            "state": "Punjab"
        },
        {
            "id": "22",
            "name": "Rajkot",
            "state": "Gujarat"
        },
        {
            "id": "23",
            "name": "Agra",
            "state": "Uttar Pradesh"
        },
        {
            "id": "24",
            "name": "Siliguri",
            "state": "West Bengal"
        },
        {
            "id": "25",
            "name": "Nashik",
            "state": "Maharashtra"
        },
        {
            "id": "26",
            "name": "Faridabad",
            "state": "Haryana"
        },
        {
            "id": "27",
            "name": "Patiala",
            "state": "Punjab"
        },
        {
            "id": "28",
            "name": "Meerut",
            "state": "Uttar Pradesh"
        },
        {
            "id": "29",
            "name": "Kalyan-Dombivali",
            "state": "Maharashtra"
        },
        {
            "id": "30",
            "name": "Vasai-Virar",
            "state": "Maharashtra"
        },
        {
            "id": "31",
            "name": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "id": "32",
            "name": "Srinagar",
            "state": "Jammu and Kashmir"
        },
        {
            "id": "33",
            "name": "Dhanbad",
            "state": "Jharkhand"
        },
        {
            "id": "34",
            "name": "Jodhpur",
            "state": "Rajasthan"
        },
        {
            "id": "35",
            "name": "Amritsar",
            "state": "Punjab"
        },
        {
            "id": "36",
            "name": "Raipur",
            "state": "Chhattisgarh"
        },
        {
            "id": "37",
            "name": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "id": "38",
            "name": "Coimbatore",
            "state": "Tamil Nadu"
        },
        {
            "id": "39",
            "name": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "id": "40",
            "name": "Gwalior",
            "state": "Madhya Pradesh"
        },
        {
            "id": "41",
            "name": "Vijayawada",
            "state": "Andhra Pradesh"
        },
        {
            "id": "42",
            "name": "Madurai",
            "state": "Tamil Nadu"
        },
        {
            "id": "43",
            "name": "Guwahati",
            "state": "Assam"
        },
        {
            "id": "44",
            "name": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "id": "45",
            "name": "Hubli-Dharwad",
            "state": "Karnataka"
        },
        {
            "id": "46",
            "name": "Amroha",
            "state": "Uttar Pradesh"
        },
        {
            "id": "47",
            "name": "Moradabad",
            "state": "Uttar Pradesh"
        },
        {
            "id": "48",
            "name": "Gurgaon",
            "state": "Haryana"
        },
        {
            "id": "49",
            "name": "Aligarh",
            "state": "Uttar Pradesh"
        },
        {
            "id": "50",
            "name": "Solapur",
            "state": "Maharashtra"
        },
        {
            "id": "51",
            "name": "Ranchi",
            "state": "Jharkhand"
        },
        {
            "id": "52",
            "name": "Jalandhar",
            "state": "Punjab"
        },
        {
            "id": "53",
            "name": "Tiruchirappalli",
            "state": "Tamil Nadu"
        },
        {
            "id": "54",
            "name": "Bhubaneswar",
            "state": "Odisha"
        },
        {
            "id": "55",
            "name": "Salem",
            "state": "Tamil Nadu"
        },
        {
            "id": "56",
            "name": "Warangal",
            "state": "Telangana"
        },
        {
            "id": "57",
            "name": "Mira-Bhayandar",
            "state": "Maharashtra"
        },
        {
            "id": "58",
            "name": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "id": "59",
            "name": "Bhiwandi",
            "state": "Maharashtra"
        },
        {
            "id": "60",
            "name": "Saharanpur",
            "state": "Uttar Pradesh"
        },
        {
            "id": "61",
            "name": "Guntur",
            "state": "Andhra Pradesh"
        },
        {
            "id": "62",
            "name": "Amravati",
            "state": "Maharashtra"
        },
        {
            "id": "63",
            "name": "Bikaner",
            "state": "Rajasthan"
        },
        {
            "id": "64",
            "name": "Noida",
            "state": "Uttar Pradesh"
        },
        {
            "id": "65",
            "name": "Jamshedpur",
            "state": "Jharkhand"
        },
        {
            "id": "66",
            "name": "Bhilai Nagar",
            "state": "Chhattisgarh"
        },
        {
            "id": "67",
            "name": "Cuttack",
            "state": "Odisha"
        },
        {
            "id": "68",
            "name": "Kochi",
            "state": "Kerala"
        },
        {
            "id": "69",
            "name": "Udaipur",
            "state": "Rajasthan"
        },
        {
            "id": "70",
            "name": "Bhavnagar",
            "state": "Gujarat"
        },
        {
            "id": "71",
            "name": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "id": "72",
            "name": "Asansol",
            "state": "West Bengal"
        },
        {
            "id": "73",
            "name": "Nanded-Waghala",
            "state": "Maharashtra"
        },
        {
            "id": "74",
            "name": "Ajmer",
            "state": "Rajasthan"
        },
        {
            "id": "75",
            "name": "Jamnagar",
            "state": "Gujarat"
        },
        {
            "id": "76",
            "name": "Ujjain",
            "state": "Madhya Pradesh"
        },
        {
            "id": "77",
            "name": "Sangli",
            "state": "Maharashtra"
        },
        {
            "id": "78",
            "name": "Loni",
            "state": "Uttar Pradesh"
        },
        {
            "id": "79",
            "name": "Jhansi",
            "state": "Uttar Pradesh"
        },
        {
            "id": "80",
            "name": "Pondicherry",
            "state": "Puducherry"
        },
        {
            "id": "81",
            "name": "Nellore",
            "state": "Andhra Pradesh"
        },
        {
            "id": "82",
            "name": "Jammu",
            "state": "Jammu and Kashmir"
        },
        {
            "id": "83",
            "name": "Belagavi",
            "state": "Karnataka"
        },
        {
            "id": "84",
            "name": "Raurkela",
            "state": "Odisha"
        },
        {
            "id": "85",
            "name": "Mangaluru",
            "state": "Karnataka"
        },
        {
            "id": "86",
            "name": "Tirunelveli",
            "state": "Tamil Nadu"
        },
        {
            "id": "87",
            "name": "Malegaon",
            "state": "Maharashtra"
        },
        {
            "id": "88",
            "name": "Gaya",
            "state": "Bihar"
        },
        {
            "id": "89",
            "name": "Tiruppur",
            "state": "Tamil Nadu"
        },
        {
            "id": "90",
            "name": "Davanagere",
            "state": "Karnataka"
        },
        {
            "id": "91",
            "name": "Kozhikode",
            "state": "Kerala"
        },
        {
            "id": "92",
            "name": "Akola",
            "state": "Maharashtra"
        },
        {
            "id": "93",
            "name": "Kurnool",
            "state": "Andhra Pradesh"
        },
        {
            "id": "94",
            "name": "Bokaro Steel City",
            "state": "Jharkhand"
        },
        {
            "id": "95",
            "name": "Rajahmundry",
            "state": "Andhra Pradesh"
        },
        {
            "id": "96",
            "name": "Ballari",
            "state": "Karnataka"
        },
        {
            "id": "97",
            "name": "Agartala",
            "state": "Tripura"
        },
        {
            "id": "98",
            "name": "Bhagalpur",
            "state": "Bihar"
        },
        {
            "id": "99",
            "name": "Latur",
            "state": "Maharashtra"
        },
        {
            "id": "100",
            "name": "Dhule",
            "state": "Maharashtra"
        },


    ]
    const [restaurantList] = useState(restaurant);
    const [citiesList] = useState(cities);
    return (
        <div>
            <h1>Explore other options for you here</h1>
            <ExploreContainer />
            <ExploreContainer />
            <Deliver title="Top Restaurant Chains" list={restaurantList} />
            <Deliver title="Cities We Deliver To" list={citiesList} />

        </div>
    )
}

export default Explore
