import Details from "./Pages/EventDetails";

export const data = [
  { id: 1, Location: "Terminus", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/Terminus.png"},
  { id: 8, Location: "Valada", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/valada.png"},
 
  { id: 2, Location: "The Point Hotel", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/lamonde.png"},
  { id: 3, Location: "The Kranius Luxury Inn", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/Crest.png"},
  { id: 4, Location: "Lamonde By Somewhere", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/thepoint.png"},
  { id: 5, Location: "Crest Hotel", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/thepoint.png"},
  { id: 6, Location: "Steffan Hotel and Suites", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/thepoint.png"},
  { id: 7, Location: "TGolden Bide Suites", Address: "6 Epiraimte Sabo Deo, Apollo Crescent, Jos, Plateau", Rate:"4.5", image:"/thepoint.png"},

];

const Data = () => {
  return (
    <div>
      <Details data={data}/>
    </div>
  )
}

export default Data
