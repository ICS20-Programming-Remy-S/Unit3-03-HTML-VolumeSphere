// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  
  // User data input
  let aSide = parseFloat(document.getElementById("a-side").value)
  let bSide = parseFloat(document.getElementById("b-side").value)
  let height = parseFloat(document.getElementById("height").value)
  //prosses
  let volume = 1/6 * (aSide * bSide * height);
  
  // Data given back to user
  document.getElementById('volume').innerHTML = 'The volume of your triangular pyramid is ' + volume.toFixed(2) + 'cm<sup>3</sup>'
}
