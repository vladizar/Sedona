// Store all needed DOM elements
const findHotelsForm = document.querySelector('.find-hotels__hotels-search-form');
const findHotelsFormShowButton = document.querySelector('.find-hotels__title');

// Storage for form animation cooldown 
let cooldown = false;

// When user clicks on form show button
findHotelsFormShowButton.onclick = function () 
{
    // If there is not any form animation now
    if (!cooldown)
    {
        // Set animation cooldown
        cooldown = true;

        // Play form animation
        findHotelsForm.classList.remove('find-hotels__hotels-search-form');
        findHotelsForm.classList.remove('hidden');
        void findHotelsForm.offsetWidth;
        findHotelsForm.classList.toggle('find-hotels__hotels-search-form_reversed-animation');
        void findHotelsForm.offsetWidth;
        findHotelsForm.classList.add('find-hotels__hotels-search-form');

        // After the end of form animation
        setTimeout(() => 
        {
            // If form should be hidden hide it
            if (findHotelsForm.classList.contains('find-hotels__hotels-search-form_reversed-animation')) 
            {
                findHotelsForm.classList.add('hidden');
            }

            // Remove animation cooldown
            cooldown = false;
        }, 840);
    }
}