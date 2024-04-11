
function generateMessages() {
  generateMessage();
  generateIntro();
}

function generateMessage() {
  var inputText = document.getElementById("inputText").value;
  var typeOfMentor = document.getElementById("typeOfMentor").value;
  var outputMessage = document.getElementById("outputMessage");

  outputMessage.setAttribute('style', 'white-space: pre-wrap;');

  var pronouns = generatePronouns(inputText);
  var timezone = generateTimezone(inputText);
  var availability = generateAvailability(inputText);
  var contentType = generateContentType(inputText);
  var role = generateRole(inputText);
  var spec = generateSpec(inputText);
  var experience = generateExperience(inputText);
  var goals = generateGoals(inputText);
  var improvements = generateImprovements(inputText);
  var learningStyle = generateLearningStyle(inputText);
  var writtenOkay = generateWrittenOkay(inputText);
  
  let stringText = "*Looking for a " + typeOfMentor + " Mentor for the following:* \n \n " 
  + ":pencil2: **Availability:** " + timezone + " - " + availability
  + "\n :pencil2: **Role:** " + role
  + "\n :pencil2: **Class/Spec:** " + spec
  + "\n :pencil2: **Current Experience:** " + experience
  + "\n :pencil2: **Goals:** " + contentType + ". " + goals
  + "\n :pencil2: **Areas of Improvement:** " + improvements
  + "\n :pencil2: **Learning Style:** " + learningStyle + " " + writtenOkay 
  + "\n \n *Please note: HoF and RWF mentors can also take on this mentee.*";


  outputMessage.textContent = stringText;
  document.getElementById("copyButton").removeAttribute("disabled");
}

function generateIntro() {
  console.log("This ran");
  var inputText = document.getElementById("inputText").value;
  var introMessage = document.getElementById("introMessage");

  introMessage.setAttribute('style', 'white-space: pre-wrap;');

  var discord = generateDiscord(inputText);
  var pronouns = generatePronouns(inputText);
  var timezone = generateTimezone(inputText);
  var availability = generateAvailability(inputText);
  var contentType = generateContentType(inputText);
  var role = generateRole(inputText);
  var spec = generateSpec(inputText);
  var experience = generateExperience(inputText);
  var goals = generateGoals(inputText);
  var improvements = generateImprovements(inputText);
  var learningStyle = generateLearningStyle(inputText);
  var writtenOkay = generateWrittenOkay(inputText);
  var links = generateLinks(inputText);
  var vods = generateVods(inputText);
  
  let stringText = "✨ " + discord + "'s Mentorship"
  + "\n \nHi @" + discord + " :dracthyr_heart: ! Thank you so much for applying to our Mentorship Program."
  + "\n \n[Mentor Username] (pronouns) is here to talk all things " + spec + " with you. [Mentor] is the [Role(s)] for <[Guild Name]> and [experience]. I know [pronoun]'s stoked to get started!" 
  + "\n \n*[Mentor Username], please find " + discord + "’s responses to our Mentee Application below:*" 
  + "\n \n:pencil2: **Pronouns:** " + pronouns
  + "\n:pencil2: **Availability:** " + timezone + " - " + availability
  + "\n:pencil2: **Role:** " + role
  + "\n:pencil2: **Class/Spec:** " + spec
  + "\n:pencil2: **Current Experience:** " + experience
  + "\n:pencil2: **Goals:** " + contentType + ". " + goals
  + "\n:pencil2: **Areas of Improvement:** " + improvements
  + "\n:pencil2: **Learning Style:** " + learningStyle + " " + writtenOkay 
  + "\n:pencil2: **WCL and R.IO Profile:** " + links 
  + "\n:pencil2: **VOD Links:** " + vods
  + "\n \n*Please note that all text conversations should take place in this channel so we have a record of your mentorship :purple_heart: (threads will “hide” if inactive for 7 days, you can find it again by clicking on the thread icon on the upper right nav bar of discord). Any voice chats can be done in WIW's voice channels or in a direct call via Discord.*" 
  + "\n \nIt can help get the conversation started if you can both take a moment to introduce yourselves further - for example, you can share what draws/drew you to the class/spec. :slight_smile:"
  + "\n \n**As a reminder:** It's helpful to ping each other when responding, particularly if you haven't chatted in a few days or are asking a new question/starting a new subject."
  + "\n \nI hope you both have a wonderful time, and happy learning!";

  introMessage.textContent = stringText;
  document.getElementById("copyIntroButton").removeAttribute("disabled");
}

function generatePronouns(text) {
  var startIndex = text.indexOf("What are your pronouns?");
  var endIndex = text.indexOf("Your Region");
  var pronouns = text.substring(startIndex + "What are your pronouns?".length, endIndex).trim();
  return pronouns;
}

function generateDiscord(text) {
  var startIndex = text.indexOf("Your Discord Handle");
  var endIndex = text.indexOf("What are your pronouns?");
  var discord = text.substring(startIndex + "Your Discord Handle".length, endIndex).trim();
  return discord;
}

function generateVods(text) {
  var startIndex = text.indexOf("[Optional] If you find VOD review useful and are comfortable sharing your Twitch/YouTube with your mentor, provide below:");
  var endIndex = text.indexOf("As a WiW member, you are expected to uphold");
  if (startIndex === -1) {
    return "";
  } else {
    var vods = text.substring(startIndex + "[Optional] If you find VOD review useful and are comfortable sharing your Twitch/YouTube with your mentor, provide below:".length, endIndex).trim();
    return vods;
  }
}

function generateLinks(text) {
  var startIndex = text.indexOf("Your Most Recent Logs & R.IO Profile (one link per line)");
  var endIndex = text.indexOf("Personal Performance Goals (At what level would you like to be playing?)");
  var links = text.substring(startIndex + "Your Most Recent Logs & R.IO Profile (one link per line)".length, endIndex).trim();
  return links;
}

function generateTimezone(text) {
  var startIndex = text.indexOf("Your Region & Timezone");
  var endIndex = text.indexOf("Dates/Times Available");
  var timezone = text.substring(startIndex + "Your Region & Timezone".length, endIndex).trim();
  return timezone;
}

function generateAvailability(text) {
  var startIndex = text.indexOf("Dates/Times Available for Meeting with Mentor");
  var endIndex = text.indexOf("For which content would you like to find a mentor? (check all that apply)");
  var availability = text.substring(startIndex + "Dates/Times Available for Meeting with Mentor".length, endIndex).trim();
  return availability;
}

function generateContentType(text) {
  var startIndex = text.indexOf("For which content would you like to find a mentor? (check all that apply)");
  var endIndex = text.indexOf("Role of Focus");
  var contentType = text.substring(startIndex + "For which content would you like to find a mentor? (check all that apply)".length, endIndex).trim();
  return contentType;
}

function generateRole(text) {
  var startIndex = text.indexOf("Role of Focus");
  var endIndex = text.indexOf("Class/Spec");
  var role = text.substring(startIndex + "Role of Focus".length, endIndex).trim();
  return role;
}

function generateSpec(text) {
  var startIndex = text.indexOf("Class/Spec");
  var endIndex = text.indexOf("Current Gameplay Experience (CE, AotC, 800 IO, etc.)");
  var spec = text.substring(startIndex + "Class/Spec".length, endIndex).trim();
  return spec;
}

function generateExperience(text) {
  var startIndex = text.indexOf("Current Gameplay Experience (CE, AotC, 800 IO, etc.)");
  var endIndex = text.indexOf("Your Most Recent Logs & R.IO Profile (one link per line)");
  var experience = text.substring(startIndex + "Current Gameplay Experience (CE, AotC, 800 IO, etc.)".length, endIndex).trim();
  return experience;
}

function generateGoals(text) {
  var startIndex = text.indexOf("Personal Performance Goals (At what level would you like to be playing?)");
  var endIndex = text.indexOf("Desired Areas of Improvement (log analysis, CD usage, mechanics, UI utilization, etc.)");
  var goals = text.substring(startIndex + "Personal Performance Goals (At what level would you like to be playing?)".length, endIndex).trim();
  return goals;
}

function generateImprovements(text) {
  var startIndex = text.indexOf("Desired Areas of Improvement (log analysis, CD usage, mechanics, UI utilization, etc.)");
  var endIndex = text.indexOf("What is your learning style?");
  var improvements = text.substring(startIndex + "Desired Areas of Improvement (log analysis, CD usage, mechanics, UI utilization, etc.)".length, endIndex).trim();
  return improvements;
}

function generateLearningStyle(text) {
  var startIndex = text.indexOf("What is your learning style?");
  var endIndex = text.indexOf("[Optional]");
  var learningStyle = text.substring(startIndex + "What is your learning style?".length, endIndex).trim();
  return learningStyle;
}

function generateWrittenOkay(text) {
  var startIndex = text.indexOf("[Optional] If you selected voice or live gameplay coaching above, would you be open to written coaching?");
  if (startIndex === -1) {
    return "";
  } else {
    var endIndex = text.indexOf("[Optional] If you find VOD review useful and are comfortable sharing your Twitch/YouTube with your mentor, provide below:");
    var writtenOkay = text.substring(startIndex + "[Optional] If you selected voice or live gameplay coaching above, would you be open to written coaching?".length, endIndex).trim();
    if (writtenOkay === "Yes, I am open to written coaching.") {
      return "(Open to written coaching if easier)"
    } else {
      return "";
    }
  }
};