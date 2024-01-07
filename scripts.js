document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const tableBody = document.querySelector("#dataTable tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const pincode = document.getElementById('pincode').value;
        const address = document.getElementById('address').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        const gender = document.querySelector('input[name="gender"]:checked').value;
        const selected = document.querySelectorAll('input[name="foods"]:checked');

    if (selected.length < 2) {
        event.preventDefault(); 
        alert("Please select at least two options.");
        return;
    }
    const food = Array.from(selected).map(radio => radio.value).join(', ');
        
        let newROw = document.createElement('tr');
        newROw.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${gender}</td>
        <td>${pincode}</td>
        <td>${address}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${food}</td>
        `;

        tableBody.appendChild(newROw);

        form.reset();
    });
});
