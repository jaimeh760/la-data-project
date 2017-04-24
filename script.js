// https://data.lacity.org/A-Safe-City/Crime-Data-From-2010-to-Present/y8tr-7khq

// https://data.lacity.org/A-Prosperous-City/Job-Applicants-by-Gender-and-Ethnicity/mkf9-fagf

//function getLADataFromAPI(){
    var endpoint = "https://data.lacity.org/resource/7fvc-faax.json";
    fetch(endpoint)
    .then(function(data) {
        return data.json();  
    }) // turns data into json data
    .then(function(json) {
        console.log(json); // logs json data into console                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        
        // logs a specific crime object into console
        console.log(json[313]); // identity theft
        console.log(json[316]); // attempted robbery
        console.log(json[156]); // kidnapping
        console.log(json[407]); // cruelty to animals
        console.log(json[587]); // peeping tom
        console.log(json[144]); // trespassing
        console.log(json[226]); // throwing object at vehicle
        console.log(json[229]); // disturbing the peace
        console.log(json[544]); // lewd letters
        console.log(json[405]); // homicide
        console.log(json[59]); // rape
        console.log(json[288]); // robbery
        console.log(json[864]); // vehicle stolen
        console.log(json[367]); // child annoying
        console.log(json[84]); // child abuse (simple)
        
        // Unused Data
        console.log(json[218]); // child abuse (aggravated)
        console.log(json[265]); // sexual behavior
        console.log(json[395]); // oral copulation
        console.log(json[514]); // burglery from vehicle
        
        // Identity Theft Hamster Data
        // "date_occ": "2013-03-10T00:00:00.000"
        var dateArray1 = json[313].date_occ.split("-"); // splits "date_occ": "2013-03-10T00:00:00.000" of each dash (-) into an array 
        var dayNumberArray1 = dateArray1[2].split("T"); // splits the "T" in "10T00:00:00.000" into an array 
        var date1 = dateArray1[1] + "/" + dayNumberArray1[0] + "/" + dateArray1[0];
        
        var criminalInfoOfIdentityTheft = `
        <li>Felony: ${json[313].crm_cd_desc}</li>
        <li>Victim: ${json[313].vict_age}-year-old ${json[313].vict_sex}emale</li>
        <li>Location: ${json[313].location}</li>
        <li>Date: ${date1}</li>
        `;
        var criminalInfo1 = document.getElementById("criminal-info-1");
        criminalInfo1.innerHTML = criminalInfoOfIdentityTheft;  
        
        // Purse Snatcher Hamster Data
        var dateArray2 = json[316].date_occ.split("-");
        var dayNumberArray2 = dateArray2[2].split("T");
        var date2 = dateArray1[1] + "/" + dayNumberArray2[0] + "/" + dateArray2[0];
        
        var criminalInfoOfPurseSnatcher = `
        <li>Felony: ${json[316].crm_cd_desc}</li>
        <li>Victim: ${json[316].vict_age}-year-old ${json[316].vict_sex}ale</li>
        <li>Location: ${json[316].location}</li>
        <li>Date: ${date2}</li>
        `;
        var criminalInfo2 = document.getElementById("criminal-info-2");
        criminalInfo2.innerHTML = criminalInfoOfPurseSnatcher;
        
        // Almond Kidnapper Hamster Data
        var dateArray3 = json[156].date_occ.split("-");
        var dayNumberArray3 = dateArray3[2].split("T");
        var date3 = dateArray3[1] + "/" + dayNumberArray3[0] + "/" + dateArray3[0];
        
        var criminalInfoOfAlmondKidnapper = `
        <li>Felony: ${json[156].crm_cd_desc}</li>
        <li>Victim: ${json[156].vict_age}-year-old ${json[156].vict_sex}emale</li>
        <li>Location: ${json[156].location}</li>
        <li>Date: ${date3}</li>
        `;
        var criminalInfo3 = document.getElementById("criminal-info-3");
        criminalInfo3.innerHTML = criminalInfoOfAlmondKidnapper;
        
        // Animal Abuser Hamster Data
        var dateArray4 = json[407].date_occ.split("-");
        var dayNumberArray4 = dateArray4[2].split("T");
        var date4 = dateArray4[1] + "/" + dayNumberArray4[0] + "/" + dateArray4[0];
        
        var criminalInfoOfAnimalAbuser = `
        <li>Felony: ${json[407].crm_cd_desc}</li>
        <li>Victim: ${json[407].vict_age}-year-old ${json[407].vict_sex}emale</li>
        <li>Location: ${json[407].location}</li>
        <li>Date: ${date4}</li>
        `;
        var criminalInfo4 = document.getElementById("criminal-info-4");
        criminalInfo4.innerHTML = criminalInfoOfAnimalAbuser;
        
        // Peeping Tom Hamster Data
        var dateArray5 = json[587].date_occ.split("-");
        var dayNumberArray5 = dateArray5[2].split("T");
        var date5 = dateArray5[1] + "/" + dayNumberArray5[0] + "/" + dateArray5[0];
        
        var criminalInfoOfPeepingTom = `
        <li>Felony: ${json[587].crm_cd_desc}</li>
        <li>Victim: ${json[587].vict_age}-year-old ${json[587].vict_sex}emale</li>
        <li>Location: ${json[587].location}</li>
        <li>Date: ${date5}</li>
        `;
        var criminalInfo5 = document.getElementById("criminal-info-5");
        criminalInfo5.innerHTML = criminalInfoOfPeepingTom;
        
        // Trespasser Hamster Data
        var dateArray6 = json[144].date_occ.split("-");
        var dayNumberArray6 = dateArray6[2].split("T");
        var date6 = dateArray6[1] + "/" + dayNumberArray6[0] + "/" + dateArray6[0];
        
        var criminalInfoOfTrespasser = `
        <li>Felony: ${json[144].crm_cd_desc}</li>
        <li>Victim: ${json[144].vict_age}-year-old ${json[144].vict_sex}ale</li>
        <li>Location: ${json[144].location}</li>
        <li>Date: ${date6}</li>
        `;
        var criminalInfo6 = document.getElementById("criminal-info-6");
        criminalInfo6.innerHTML = criminalInfoOfTrespasser;
        
        // Vehicle Harasser
        var dateArray7 = json[226].date_occ.split("-");
        var dayNumberArray7 = dateArray7[2].split("T");
        var date7 = dateArray7[1] + "/" + dayNumberArray7[0] + "/" + dateArray7[0];
        
        var criminalInfoOfVehicleHarasser = `
        <li>Felony: ${json[226].crm_cd_desc}</li>
        <li>Victim: ${json[226].vict_age}-year-old ${json[226].vict_sex}ale</li>
        <li>Location: ${json[226].location}</li>
        <li>Date: ${date7}</li>
        `;
        var criminalInfo7 = document.getElementById("criminal-info-7");
        criminalInfo7.innerHTML = criminalInfoOfVehicleHarasser;
        
        // Rood the Rude Hamster Data
        var dateArray8 = json[229].date_occ.split("-");
        var dayNumberArray8 = dateArray8[2].split("T");
        var date8 = dateArray8[1] + "/" + dayNumberArray8[0] + "/" + dateArray8[0];
        
        var criminalInfoOfRoodTheRudeHamster = `
        <li>Felony: ${json[229].crm_cd_desc}</li>
        <li>Victim: ${json[229].vict_age}-year-old ${json[229].vict_sex}ale</li>
        <li>Location: ${json[229].location}</li>
        <li>Date: ${date8}</li>
        `;
        var criminalInfo8 = document.getElementById("criminal-info-8");
        criminalInfo8.innerHTML = criminalInfoOfRoodTheRudeHamster;
        
        // Lecherous Writer Hamster Data
        var dateArray9 = json[544].date_occ.split("-");
        var dayNumberArray9 = dateArray9[2].split("T");
        var date9 = dateArray9[1] + "/" + dayNumberArray9[0] + "/" + dateArray9[0];
        
        var criminalInfoOfLecherousWriter = `
        <li>Felony: ${json[544].crm_cd_desc}</li>
        <li>Victim: ${json[544].vict_age}-year-old ${json[544].vict_sex}emale</li>
        <li>Location: ${json[544].location}</li>
        <li>Date: ${date9}</li>
        `;
        var criminalInfo9 = document.getElementById("criminal-info-9");
        criminalInfo9.innerHTML = criminalInfoOfLecherousWriter;
        
        // Luke Hamsterwalker Data
        var dateArray10 = json[405].date_occ.split("-");
        var dayNumberArray10 = dateArray10[2].split("T");
        var date10 = dateArray10[1] + "/" + dayNumberArray10[0] + "/" + dateArray10[0];
        
        var criminalInfoOfLukeHamsterwalker = `
        <li>Felony: ${json[405].crm_cd_desc}</li>
        <li>Victim: ${json[405].vict_age}-year-old ${json[405].vict_sex}ale</li>
        <li>Location: ${json[405].location}</li>
        <li>Date: ${date10}</li>
        `;
        var criminalInfo10 = document.getElementById("criminal-info-10");
        criminalInfo10.innerHTML = criminalInfoOfLukeHamsterwalker;
        
        // Sexual Predator Data
        var dateArray11 = json[59].date_occ.split("-");
        var dayNumberArray11 = dateArray11[2].split("T");
        var date11 = dateArray11[1] + "/" + dayNumberArray11[0] + "/" + dateArray11[0];
        
        var criminalInfoOfSexualPredator = `
        <li>Felony: ${json[59].crm_cd_desc}</li>
        <li>Victim: ${json[59].vict_age}-year-old ${json[59].vict_sex}emale</li>
        <li>Location: ${json[59].location}</li>
        <li>Date: ${date11}</li>
        `;
        var criminalInfo11 = document.getElementById("criminal-info-11");
        criminalInfo11.innerHTML = criminalInfoOfSexualPredator;
        
        // Garbage Thief Data
        var dateArray12 = json[288].date_occ.split("-");
        var dayNumberArray12 = dateArray12[2].split("T");
        var date12 = dateArray12[1] + "/" + dayNumberArray12[0] + "/" + dateArray12[0];
        
        var criminalInfoOfGarbageThief = `
        <li>Felony: ${json[288].crm_cd_desc}</li>
        <li>Victim: ${json[288].vict_age}-year-old ${json[288].vict_sex}emale</li>
        <li>Location: ${json[288].location}</li>
        <li>Date: ${date12}</li>
        `;
        var criminalInfo12 = document.getElementById("criminal-info-12");
        criminalInfo12.innerHTML = criminalInfoOfGarbageThief;
        
        // Vehicle Thief Data
        var dateArray13 = json[864].date_occ.split("-");
        var dayNumberArray13 = dateArray13[2].split("T");
        var date13 = dateArray13[1] + "/" + dayNumberArray13[0] + "/" + dateArray13[0];
        
        var criminalInfoOfVehicleThief = `
        <li>Felony: ${json[864].crm_cd_desc}</li>
        <li>Victim: ${json[864].vict_age}-year-old</li>
        <li>Location: ${json[864].location}</li>
        <li>Date: ${date13}</li>
        `;
        var criminalInfo13 = document.getElementById("criminal-info-13");
        criminalInfo13.innerHTML = criminalInfoOfVehicleThief;
        
        // Innocent Hamster Data
        var dateArray14 = json[367].date_occ.split("-");
        var dayNumberArray14 = dateArray14[2].split("T");
        var date14 = dateArray14[1] + "/" + dayNumberArray14[0] + "/" + dateArray14[0];
        
        var criminalInfoOfInnocentHamster = `
        <li>Felony: ${json[367].crm_cd_desc}</li>
        <li>Victim: ${json[367].vict_age}-year-old ${json[288].vict_sex}emale</li>
        <li>Location: ${json[367].location}</li>
        <li>Date: ${date14}</li>
        `;
        var criminalInfo14 = document.getElementById("criminal-info-14");
        criminalInfo14.innerHTML = criminalInfoOfInnocentHamster;
        
        // Child Abuser Data
        var dateArray15 = json[84].date_occ.split("-");
        var dayNumberArray15 = dateArray15[2].split("T");
        var date15 = dateArray15[1] + "/" + dayNumberArray15[0] + "/" + dateArray15[0];
        
        var criminalInfoOfChildAbuser = `
        <li>Felony: ${json[84].crm_cd_desc}</li>
        <li>Victim: ${json[84].vict_age}-year-old ${json[84].vict_sex}ale</li>
        <li>Location: ${json[84].location}</li>
        <li>Date: ${date15}</li>
        `;
        var criminalInfo15 = document.getElementById("criminal-info-15");
        criminalInfo15.innerHTML = criminalInfoOfChildAbuser;
        
        var list = "";
        //var jsonLength = json.length;
        console.log(json.length);
        
        json.forEach(function(item) {
            // "date_occ": "2013-03-10T00:00:00.000" 
            var dateArray = item.date_occ.split("-"); // ["2013", "03", "10T00:00:00.000"]
            var dayNumberArray = dateArray[2].split("T"); // ["10", "00:00:00.000"]
            var date = dateArray[1] + "/" + dayNumberArray[0] + "/" + dateArray[0]; // 03/10/2013
            
            item.date_occ = date;
            
            // console.log(date);
            
            //var itemList = "<td>" + item.crmcd_desc + " (" + item.date_occ + ")" + "</td>";
            
            var itemList = `
            <tr>
                <td>${item.date_occ}</td>
                <td>${item.crm_cd_desc}</td>
                <td>${item.location}</td>
                <td>${item.vict_sex}</td>
                <td>${item.vict_age}</td>
            </tr>
            `;
            
            list += itemList;
            
        });
        
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = list;
        
    })
    .catch(function(error) {
       console.log(error); 
    }); // catches any erros and console.logs the error for inspection
//}

function loadMore() {
    document.getElementById("load-card-1").style.display = "inline-block";
    document.getElementById("load-card-2").style.display = "inline-block";
    document.getElementById("load-card-3").style.display = "inline-block";
    document.getElementById("load-card-4").style.display = "inline-block";
    document.getElementById("load-card-5").style.display = "inline-block";
    document.getElementById("load-card-6").style.display = "inline-block";
    document.getElementById("load-card-7").style.display = "inline-block";
    document.getElementById("load-card-8").style.display = "inline-block";
    document.getElementById("load-card-9").style.display = "inline-block";
    document.getElementById("load-more-button").style.display = "none";
    document.getElementById("show-less-button").style.display = "inherit";
}

function showLess() {
    document.getElementById("load-card-1").style.display = "none";
    document.getElementById("load-card-2").style.display = "none";
    document.getElementById("load-card-3").style.display = "none";
    document.getElementById("load-card-4").style.display = "none";
    document.getElementById("load-card-5").style.display = "none";
    document.getElementById("load-card-6").style.display = "none";
    document.getElementById("load-card-7").style.display = "none";
    document.getElementById("load-card-8").style.display = "none";
    document.getElementById("load-card-9").style.display = "none";
    document.getElementById("load-more-button").style.display = "inherit";
    document.getElementById("show-less-button").style.display = "none";
}

var aboutParagraph = `
    In this site, you will encounter the world's most rebellious hamsters and discover crimes done around Los Angeles from year to year.
    You will be able to see, with your own eyes, what little rodents do when humans are absent.
    This is a site where you can learn about a list of various crimes and hamsters who committed the most unforgivable hamster crime.`;

var howItWorksParagraph = `
    With the help of <a href="https://data.lacity.org/" target="_">DataLa's API</a> 
    and <a href="http://materializecss.com/" target="_"> Google's Materialize Design</a>, this site was created. 
    DataLa provided us with crime data that we needed, and we displayed that information for you in this materialized site.
    You can use this information do discover, explore, and learn about various crimes committed in Los Angeles throughout the years.
`;

var questionsAndAnswers = `
    <b>1. Are the contents based on legitimate information?</b> 
    <blockquote>
        Yes and no. Only the crime data is probably real but not the ridiculous hamster stories.
        Note that this website is meant to contain sarcasm and satire.
    </blockquote>
    
    <b>2. What is the purpose of the hamster cards?</b> 
    <blockquote>
        They are used to display hand-picked data that seem most intriguing and provide you with absurd hamster stories.
        Also, this website is a hamster website, so it needs to contain some kind of hamster information.
    </blockquote>
    
    <b>3. Why did you create this app?</b> 
    <blockquote>
        I have to... It's part of my CP class grade. .-.
    </blockquote>
    
    <b>4. This app looks useless.</b> 
    <blockquote>
        You're useless. :)
    </blockquote>
    
    <b>5. What is the whole point of this app?</b> 
    <blockquote>
        Read the "ABOUT" paragraph of this column.
    </blockquote>
    
    <b>6. Will you be making more hamster cards?</b>
    <blockquote>
        When I feel like it...
    </blockquote>
    
    <b>7. Why hamsters and not people?</b> 
    <blockquote>
        Hamsters are people but better.
    </blockquote>
    
    <b>8. Hamsters!</b> 
    <blockquote>
        Yes, hamsters are highly intelligent creatures. 
        Perhaps, they'll take over the world soon. ;)
    </blockquote>
    
    <b>9. How can hamsters commit crimes when they're animals?</b> 
    <blockquote>How can you commit crimes when you're an animal as well?</blockquote>
    
    <b>10. Why don't the hamsters have genders in their stories?</b> 
    <blockquote>
        The hamsters don't want anyone to know about their gender.
        Plus, lack of research makes it difficult to determine the hamsters' gender.
    </blockquote>
    
    <b>11. Why did you chose a brown theme for this app?</b> 
    <blockquote>
        I assumed brown is rarely used on sites, so I thought it would be different if I chose that color theme on my app.
    </blockquote>
    
    <b>12. How do I find out how many years each hamster spent in prison?</b> 
    <blockquote>
        Just assume it.
    </blockquote>
`;

function about() {
    document.getElementById("intro").innerHTML = aboutParagraph;
    document.getElementById("about-button").className = "waves-effect waves-light btn disabled";
    document.getElementById("how-it-works-button").className = "waves-effect waves-light btn";
    document.getElementById("q-and-a-button").className = "waves-effect waves-light btn";
}

function howItWorks() {
    document.getElementById("intro").innerHTML = howItWorksParagraph;
    document.getElementById("how-it-works-button").className = "waves-effect waves-light btn disabled";
    document.getElementById("about-button").className = "waves-effect waves-light btn";
    document.getElementById("q-and-a-button").className = "waves-effect waves-light btn";
}

function qAndA() {
    document.getElementById("intro").style.overflowY = "scroll";
    document.getElementById("intro").innerHTML = questionsAndAnswers;
    document.getElementById("q-and-a-button").className = "waves-effect waves-light btn disabled";
    document.getElementById("how-it-works-button").className = "waves-effect waves-light btn";
    document.getElementById("about-button").className = "waves-effect waves-light btn";
}
