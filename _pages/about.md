---
layout: about
title: about
permalink: /
subtitle: I want to have a random string shown here every refresh

<p id="randomText">This is some random text.</p>
<script>
  // An array of random text options
  var randomTextOptions = [
    "Random text option 1",
    "Random text option 2",
    "Random text option 3",
    // Add more options as needed
  ];

  // Function to choose a random option from the array
  function getRandomText() {
    var randomIndex = Math.floor(Math.random() * randomTextOptions.length);
    return randomTextOptions[randomIndex];
  }

  // Update the content of the <p> element with a random option
  document.getElementById("randomText").textContent = getRandomText();
</script>
profile:
  align: right
  image: me.png
  address: An assumed image of AVR1H (Sources are disputed, credability may vary).
  image_circular: false # crops the image to make it circular


news: true  # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---
<br>
<p>Welcome to my website.</p>
<p>Upon entering my website, you might ask yourself, how come you have a website? How come I <b>don't</b> have a website?</p>
<p>A very valid question indeed. I for one believe that every person should have a website. In an age when vanity is a virtue, and people are rewarded for showing narcissistic traits, it is only elementary that the next step in your digital footprint would be to have a whole-ass website dedicated to you and to you alone.</p>
<p>In here, you can get updated on my latest upload, read my blog posts, or work on your eye-contact skills with the image on your right.</p>
<p>Enjoy your stay!</p>
<br>
<hr>
