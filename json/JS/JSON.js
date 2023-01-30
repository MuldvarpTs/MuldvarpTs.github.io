//A) JSON (JavaScript Object Notation) er et lettvekt format for datautveksling som er enkelt for mennesker å lese og skrive og enkelt for maskiner å parse og generere. Det brukes til å utveksle data mellom en server og en webapplikasjon.

//B) Et eksempel på bruk av JSON i programmering er å sende data fra en server til en webapplikasjon. Serveren ville returnere data i JSON-format, som webapplikasjonen deretter ville parse og bruke til å vise informasjon på siden.

//C)
var jsonExample = {
    "Laerere": {
      "Naturfag": "Pratima Mundhe",
      "Medieproduksjon": "Marthe Ødegaard",
      "Informasjonsteknologi": "Joakim Husefest",
      "Helse og matfag": "Ida Wolden",
      "Engelsk": "Walter Johnsen"
    }
  };
  
  //D)
  var obj = JSON.stringify(jsonExample);
  obj = JSON.parse(obj);
  console.log(obj)
  
  //E) For og få tilgang til "Helse og matfag" læreren sitt navn:
  console.log(obj.Laerere["Helse og matfag"]);
  