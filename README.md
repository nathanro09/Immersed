# Immersed

<h3>What is Immersed?</h3>
Immersed is a web application that offers a safe and educational platform for kids/teens to learn more about cyber security as well as the potential hazards when surfing the web. This applications provides users with realistic consequences when violating good cyber security practices as well as rewards for executing safe security measures. Immersed provides relative feedback based on each users specific action in order to create a firm foundation withh a strong recall of the overall training experience. Immersed is unique compared to traditional cyber security methods due to its complete set of passive and active training situations that offer an interactive, isolated, and practical experience, making it an overall effective and comprehensive training tool.
  </br>
<h3>Why can't I access all of the code for Immersed?</h3>
As Immersed is currently in its Minimum Viable Product (MVP) stage, I am unable to provide full access to the proprietary code. However, I have provided code snippets as well as screenshots in correlation to my personal contributions. Hopefully, this will give you a visual understanding of the functionality and practicality of the overall User Interface and Experience.
  </br>
<h3>What was my Role in this project?</h3>
As a key member of the team, I specialized in front-end development for use by both the System Administrator and User. Below, I will provide a brief overview of my tasks and responsibilities.
  </br>
<h4>&nbsp; 1. Ads</h4>
&nbsp; Task:
  </br>
<p>&nbsp; -Develop a Form where the System Admin will be able to Create, Edit, and Delete an Ad. 
  </br>
&nbsp; -Create an Ad Viewer where Users will be able to view all current existing ads.
  </br>
&nbsp; -Provide a method in which Users will encounter a conequence or reward when interacting with a specific Ad.</p>
&nbsp; Execution: 
  </br>
<p>&nbsp; Created an Ad Form to include an Input Field as well as an Output Field to preview the inserted Data. For the Ad &nbsp;&nbsp;Viewer, I created a Primary View as well as a Thumbnail View using both React-Bootstrap Carousel and React-Slick. I &nbsp;&nbsp;implemented sweetalert2 for Users to interact with when clicking the Ad Image.</p>
&nbsp; Blockers:
  </br>
<p>&nbsp; One of the Main blockers for this task was the implementation of React-Slick. I wanted to create a Vertical Slider for &nbsp;&nbsp;the Thumbnails, but encountered issues with slide-scrolling when clicking on a new ad. Also, after some research, I &nbsp;&nbsp;found that many of React-Slicks' props were deprecated.</p>
&nbsp; Solution:
  </br>
<p>&nbsp; I used React-Bootstrap Carousel to make each individual Ad Thumbnail a Carousel item, then implemented React &nbsp;&nbsp;Slick to map out each Carousel Item as a Slide. This prevented the duplicate view for Ads when applying Infinite &nbsp;&nbsp;scrolling as well as providing the accurate and centered Thumbnail when clicking on the next slide.</p>
<h4>&nbsp; 2. KArcade</h4>
&nbsp; Task:
  </br>
<p>&nbsp; -Create an Application where Users will be able to Learn Korean through lesson plans and mini-games.
  </br>
&nbsp; -Implement Dynamic Routing so components will be conditionally rendered in a single component instead of &nbsp;&nbsp;&nbsp;&nbsp;navigating to a new component.
  </br>
&nbsp; -Provide unique Visuals as well as a Logo specific to this Application.
  </br>
&nbsp; -Provide Accessibility options for Users.</p>
&nbsp; Execution:
  </br>
<p>&nbsp; I created all of the visuals in Adobe Illustrator/Adobe Photoshop and applied them as background images. I created &nbsp;&nbsp;transparent clickable zones using React-Bootstrap Col/Rows and adjusting their dimensions with "clip-path: &nbsp;&nbsp;polygon" to match the dimensions of each zone, so users may be able to distinguish interactive zones when hovered. I &nbsp;&nbsp;implemented "state" as useLocation to conditionally render components by passing "state.type." Also, I inserted and &nbsp;&nbsp;an audio option using custom, edited .wav files provided by another team member.</p>
&nbsp; Blockers:
  </br>
<p>&nbsp; The biggest blocker for this task was Time-Management. Since I had to create all the visuals, audio, and functionality within my given deadline, I was initially a bit overwhelmed by the complexity of this application.</p>
&nbsp; Solution:
  </br>
<p>&nbsp; I created a User Flow diagram to visualize the overall user experience. I then created a list of priorities in relation to the purpose of each task. For the Interface aspect of this application, I created simple Vector Art to provide a basic foundation for future developers to easily grasp and mimic. I focused on all the initial components depicted in the Menu Component, then prioritized on the lesson plans and mini-games.

