/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Jaroslav Klech",
	"role": "Technical Writer",
	"contacts": {
		"mobile": "+420 604 175 183",
		"email": "klechh@gmail.com",
		"github": "JaroslavKlech",
		"location": "Olomouc"
	},
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ornare ante, nec viverra quam. Curabitur fermentum lacus lacus, vel aliquet felis sodales sit amet. Mauris rutrum, nulla in dapibus malesuada, augue felis pretium est, iaculis aliquam ipsum ante et nibh. Vivamus leo mauris, tempus ac egestas et, eleifend eu turpis. Nulla non purus nec erat porta elementum. Curabitur non felis sit amet mauris eleifend aliquam. Integer sed diam felis. Nulla dignissim blandit nisl, porttitor ultricies augue tempus sed. Aliquam leo tellus, viverra eu mi a, imperdiet facilisis magna. Vestibulum eget nisl ac metus scelerisque facilisis. Integer eget enim eget ex porta dignissim ac in purus. Proin sem turpis, iaculis malesuada risus at, volutpat suscipit quam. Phasellus faucibus laoreet augue in varius. Suspendisse quis blandit diam, sed consequat neque. Donec vestibulum ornare odio sit amet consequat.",
	"skills": ["Git", "JavaScript", "Stylistics"],
	"picture": "images/fry.jpg"
};

var projects = {
	"websites": [{
			"title": "Resume website",
			"dates": "December 2016",
			"description": "My CV in electronic way",
			"images": {
				"firstImage": "https://wp.jsstatic.com/wp-content/uploads/sites/6/2014/10/123058.jpg",
				"secondImage": "https://about.canva.com/wp-content/uploads/sites/3/2015/09/creative_resume.png",
				"thirdImage": "https://thumbs.dreamstime.com/z/colorful-cool-resume-cv-template-new-curriculum-vitae-design-57724950.jpg"
			}
		},
		{
			"title": "Jarda's blog",
			"dates": "December 2016 - January 2017",
			"description": "My blog written in python with a help of Django framework.",
			"images": {
				"firstImage": "https://s3.amazonaws.com/clarityfm-production/attachments/1916/default/logo_blog.png?1406761370",
				"secondImage": "https://i.pinimg.com/736x/52/b3/46/52b346d69951c9bc115a29d3131c768c--blog-tips-my-blog.jpg",
				"thirdImage": "http://blog.easylearning.guru/wordpress/wp-content/uploads/2016/03/python-django-programming-blog-22-3-2016-778x381.png"
			}
		}
	]
};

var work = {
	"jobs": [{
			"employer": "SnapShot",
			"title": "Technical Writer",
			"location": "Brno",
			"dates": "May 2017 - now",
			"description": "Writes technical documentation for SnapShot APIs."
		},
		{
			"employer": "Ceska sporitelna",
			"title": "Data Analyst",
			"location": "Prostejov",
			"dates": "October 2016 - December 2016",
			"description": "Analyzes data for the call center of Ceska sporitelna."
		},
		{
			"employer": "GMC Software",
			"title": "Technical Writer",
			"location": "Olomouc, Czech republic",
			"dates": "March 2016 - October 2016",
			"description": "Writes technical documentation for users of GMC products."
		},
		{
			"employer": "Global Tungsten and Powders",
			"title": "Customer Service Representative",
			"location": "Bruntal",
			"dates": "October 2014 - March 2015",
			"description": "Provides services connected to delivering products."
		}
	]
};

var education = [{
		"schools": [{
				"name": "Palacky University",
				"city": "Olomouc",
				"degree": "BA",
				"url": "https://www.upol.cz",
				"major": ["English", "Economics"]
			},
			{
				"name": "Palacky University",
				"city": "Olomouc",
				"degree": "MA",
				"url": "https://www.upol.cz",
				"major": ["English", "Economics"]
			}
		]
	},
	{
		"onlineCourses": [{
				"title": "JavaScript syntax",
				"school": "Udacity",
				"dates": "October 2017 - December 2017",
				"url": "https://www.udacity.com"
			},
			{
				"title": "Linux foundations",
				"school": "EdX",
				"dates": "July 2017 - November 2017",
				"url": "https://www.edx.com"
			}
		]
	}
]


var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);
var formattedPicture = HTMLbioPic.replace("%data%", bio["picture"]);
$("#header").prepend(formattedName, formattedRole);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
$("#header").append(formattedWelcomeMessage, formattedPicture);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};


function locationizer(work) {
	var locationArray = [];

	for (job in work.jobs) {
		var newLocation = work.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
};

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()
		name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
};
$("#main").append(internationalizeButton);

var displayWork = function () {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.lenght > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

//you want to see a map?
$("#mapDiv").append(googleMap);
