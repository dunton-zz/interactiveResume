/*
resumeBuilder.js

This file is built to supply JSON data and load it into the webpage

Built by Ryan Dunton on September 16, 2016
*/

var bio = {
  "name": "Ryan Dunton",
  "role": "Front-End Developer",
  "contacts" : 
  	{"mobile": "208-262-6461",
    "email": "ryandunton1@gmail.com",
    "github": "github.com/dunton",
    "twitter": "@ryan_dunton",
    "location": "New York, New York"},
  "welcomeMessage": "Hey I'm Ryan!",
  "skills": [
  	"Python",
  	"Javascript",
  	"HTML/CSS",
  	"SQL"
  ],
  "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/0a0/3a0/2e3d2e2.jpg"    
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);	

	$('#header').prepend(formattedRole,formattedName);

	$('#header').append(formattedPic, formattedWelcome);

	if (bio.skills.length > 0) {
		$("#topContacts").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			if (bio.skills.hasOwnProperty(i)) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#topContacts").append(formattedSkill);
			}
		}
	}

	//I know topContacts and secondContacts are the same but this helped with the formatting a lot

	var formattedHTMLcontact = HTMLcontactGeneric.replace("%contact%", "Contact Info:");
	$("#secondContacts").append(formattedHTMLcontact);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$('#secondContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter);

	$('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter);
	
};

var education = {
	"schools" : 
		[
			{"name": "Boise State University",
			"location": "Boise, Idaho",
			"degree": "Bachelors of Arts",
			"majors": ["Economics"],
			"dates": "August 2011 - December 2014",
			"url": "http://www.boisestate.edu"
		}
		],
	"onlineCourses" : [
			{"title": "-- Full Stack Nanodegree",
			"school": "Udacity",
			"dates": " February 2016 - June 2016",
			"url": "http://www.udacity.com"}
		]
};

education.display = function() {
	var a;
	var edu;
	
	
	for (var i = 0; i < education.schools.length; i++){
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
		formattedSchool = formattedSchool.replace('#', education.schools[i].url);
		$('.education-entry:last').append(formattedSchool);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$('.education-entry:last').append(formattedSchoolLocation);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$('.education-entry:last').append(formattedDegree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$('.education-entry:last').append(formattedMajor);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$('.education-entry:last').append(formattedSchoolDates);
	}
	
	$("#education").append(HTMLonlineClasses);
	

	for (var i = 0; i < education.onlineCourses.length; i++){
		$("#education").append(HTMLonlineSchoolStart);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', "<a href = " + education.onlineCourses[i].url + '>' + education.onlineCourses[i].school);
		$('.education-entry:last').append(formattedOnlineSchool);
		var formattedOnlineCourses = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
		$('.education-entry:last').append(formattedOnlineCourses);
		var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
		$('.education-entry:last').append(onlineDates);
	}
};


var work = {
	"jobs" : [
		{"employer": "Quantifind",
		"title" : "Sales Development",
		"location": "Menlo Park, California",
		"dates": "June 2015 - January 2016",
		"description": "Qualified and prospected new leads for early sales pipeline development",
		"url": "http://www.quantifind.com"}
	]
};

work.display = function() {
	var i = 0;
	var a = '';
	$("#workExperience").append(HTMLworkStart);
	for (i = 0; i< work.jobs.length; i++) {
		//$("#work-entry:last").append(HTMLworkStart);
		a = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		a = a.replace("#", work.jobs[i].url);
		$('.work-entry:last').append(a);
		a = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$('.work-entry:last').append(a);
		a = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$('.work-entry:last').append(a);
		a = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(a);
		a = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$('.work-entry:last').append(a);
		
	}
};

var projects = {
	"projects" : [
		{"title": "Responsive Web Design Mockup",
		"dates": "September 2016",
		"description": "Took a mockup written by a designer and used the Bootstrap framework to code up a matching website with functionality, using HTML/CSS and Javascript",
		"images": ["http://twwebmedia.co.uk/wp-content/uploads/2015/09/superstarzResponsiveMockup.jpg"]},
		{"title": "Coffeeshops Application",
		"dates": "April 2016",
		"description": "Built entire application with CRUD functionality for local coffeeshops and their owners implementing OAuth features to verify user identities with Google and Facebook accounts",
		"images": ["http://docknowsrealestate.com/wp-content/uploads/2015/10/coffee-shop1.jpg"]},
		{"title": "Game API",
		"dates": "May 2016",
		"description": "Built out API for a 'Hangman' game on Google's API Explorer to allow players to play the game and find their JSON data",
		"images": ["https://learningactivities.files.wordpress.com/2008/03/hangmanbig.jpg"]}
	]
};

projects.display = function() {
	var i = 0; 
	for (i; i<projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images); 
		
		$('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);
		for (var j=0; j < projects.projects[i].images.length; j++) {
        	var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
        	$('.project-entry:last').append(formattedImage);
		};
	}

};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);




