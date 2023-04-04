// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  
  // User data input
  let radius = parseFloat(document.getElementById("radius").value)
  //prosses
  let volume = 4.0 / 3.0 * Math.PI * Math.pow(radius,3);
  
  // Data given back to user
  document.getElementById('volume').innerHTML = 'The volume of your sphere is ' + volume.toFixed(2) + 'cm<sup>3</sup>'
}
